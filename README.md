# CEX Futures Trading Platform

An educational rebuild of a centralized perpetual futures trading platform. The project is meant to make exchange internals easier to inspect: authenticated users, collateral, order placement, order books, fills, positions, liquidations, market data, and the matching engine loop that eventually sits at the center of the system.

This is not production trading software. It is a learning project, and the matching engine is still in progress.

## Why This Exists

Futures exchanges look simple from the outside: place an order, open a long or short, track PnL, cancel orders, and get liquidated if margin is gone. Under the hood, the interesting parts are systems problems:

- fast order book reads and writes
- price-time priority
- queues at each price level
- balance locking and settlement
- position updates after fills
- liquidation checks from live mark prices
- async communication between API and engine
- persistence of users, markets, orders, and fills

This repository is an attempt to rebuild those pieces from first principles before moving the core engine to Rust.

## Current Architecture

```text
client / tests
  |
  v
apps/backend
  |
  | Redis request/response queue
  v
apps/engine
  |
  | Binance Futures mark-price websocket
  v
in-memory prices, users, collateral, order books, positions, fills

packages/db
  |
  v
Prisma + Postgres for persisted auth, markets, orders, and fills
```

The codebase now uses a Bun workspace / Turborepo monorepo:

- `apps/backend` owns the HTTP API.
- `apps/engine` owns the current TypeScript exchange engine.
- `apps/tests` contains Bun-based API/integration tests.
- `packages/db` owns Prisma schema, migrations, generated client, and the shared Prisma export.
- `packages/eslint-config` and `packages/typescript-config` contain shared workspace tooling.

## Repository Layout

```text
.
+-- apps/
|   +-- backend/
|   |   +-- src/
|   |       +-- controllers/
|   |       +-- routes/
|   |       +-- store/
|   |       +-- types/
|   |       +-- utils/
|   +-- engine/
|   |   +-- src/
|   |       +-- helpers/
|   |       +-- store/
|   |       +-- types/
|   |       +-- utils/
|   |       +-- ws/
|   +-- tests/
|       +-- index.test.ts
+-- packages/
|   +-- db/
|   |   +-- prisma/
|   |   |   +-- schema.prisma
|   |   |   +-- migrations/
|   |   |   +-- generated/
|   |   +-- index.ts
|   |   +-- prisma.config.ts
|   +-- eslint-config/
|   +-- typescript-config/
+-- package.json
+-- turbo.json
```

## Tech Stack

- Bun workspaces
- Turborepo
- TypeScript
- Express
- Redis
- Prisma
- Postgres
- WebSocket market data from Binance Futures
- Zod
- JWT auth
- Bun test

## Apps And Packages

### `apps/backend`

Express API responsible for:

- user signup and signin
- JWT authentication
- request validation with Zod
- admin market creation
- persisted auth and market data through `packages/db`
- sending exchange commands to the engine over Redis
- waiting for correlated engine responses

### `apps/engine`

TypeScript engine process responsible for:

- listening for backend commands on a Redis queue
- keeping in-memory users, collateral, orders, positions, fills, and order books
- consuming Binance Futures mark-price websocket data
- filling marketable orders against the current market price
- storing non-marketable limit orders in an in-memory order book
- cancelling open limit orders
- checking liquidation conditions from live market updates

The real price-time-priority matching engine is not complete yet. The engine has a working flow skeleton, but it does not fully match incoming orders against opposite-side resting liquidity.

### `packages/db`

Shared database package responsible for:

- Prisma schema
- Prisma migrations
- generated Prisma client
- shared `prisma` export used by the backend

The Prisma schema currently models:

- `User`
- `Markets`
- `Orders`
- `Fills`
- order side/type/status enums

### `apps/tests`

Bun test workspace for API/integration tests. These tests expect the backend, engine, Redis, and Postgres to be running.

## Getting Started

### Prerequisites

- Bun `1.3.2` or newer
- Redis
- Postgres

### 1. Install dependencies

From the repository root:

```bash
bun install
```

### 2. Configure environment variables

Create `.env` files where the processes run from.

For `apps/backend/.env`:

```env
PORT=3000
DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/DATABASE
REDIS_URL=redis://localhost:6379
JWT_SECRET=replace-this-with-a-real-secret
ADMIN_SECRET=replace-this-with-an-admin-secret
INCOMING_QUEUE=backend-to-engine-broker
ENGINE_TIMEOUT_MS=30000
```

For `apps/engine/.env`:

```env
REDIS_URL=redis://localhost:6379
INCOMING_QUEUE=backend-to-engine-broker
```

For `packages/db/.env`:

```env
DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/DATABASE
```

`packages/db` needs `DATABASE_URL` when running Prisma commands. The backend also needs `DATABASE_URL` at runtime because it imports the shared Prisma client.

### 3. Prepare the database

From `packages/db`:

```bash
bunx prisma generate
bunx prisma migrate dev
```

### 4. Start Redis and Postgres

Start both services locally before running the backend and engine.

Example Redis command:

```bash
redis-server
```

### 5. Start the backend and engine

From the repository root, run all persistent dev tasks:

```bash
bun run dev
```

Or run them separately:

```bash
bun run dev --filter=backend
bun run dev --filter=engine
```

The backend defaults to:

```text
http://localhost:3000
```

Health check:

```http
GET /health
```

## Running Tests

The tests are in `apps/tests` and target `http://localhost:3000`.

Start Postgres, Redis, the backend, and the engine first, then run:

```bash
bun test apps/tests
```

## API Surface

### Auth

```http
POST /signup
POST /signin
```

Both accept:

```json
{
  "username": "alice",
  "password": "password"
}
```

Protected exchange routes expect:

```http
Authorization: Bearer <token>
```

### Admin

```http
POST /admin/market
```

Admin routes expect:

```http
token: <ADMIN_SECRET>
```

Example market:

```json
{
  "symbol": "SOL",
  "imageUrl": ""
}
```

### Exchange

```http
POST   /onramp
POST   /order
DELETE /order/:orderId
GET    /equity/available
GET    /positions/open/:marketId
GET    /positions/closed/:marketId
GET    /orders/open/:marketId
GET    /orders/:marketId
GET    /fills
```

Example onramp:

```json
{
  "price": 1000
}
```

Example limit order:

```json
{
  "orderType": "limit",
  "positionType": "long",
  "equity": 100,
  "market": "BTCUSDT",
  "price": 65000,
  "qty": 0.01
}
```

Example market order:

```json
{
  "orderType": "market",
  "positionType": "short",
  "equity": 100,
  "market": "ETHUSDT",
  "qty": 0.1,
  "slippage": 1
}
```

## Current Engine Model

The current in-memory engine state lives in `apps/engine/src/store/exchange-store.ts`.

Important structures:

- `USERS`: user collateral, positions, and orders
- `ORDERBOOKS`: per-market bids and asks grouped by price
- `FILLS`: executed fills
- `MARKET_PRICES`: latest Binance mark prices

Current order book shape:

```ts
type Bid = {
  availableQty: number;
  openOrders: {
    userId: string;
    qty: number;
    filledQty: number;
    orderId: string;
    createdAt: number;
  }[];
};

interface Orderbook {
  bids: Record<number, Bid>;
  asks: Record<number, Bid>;
  lastTradedPrice: number;
  indexPrice: number;
}
```

This is good enough for learning the flow, but it is not the final structure for a serious matching engine.

## What Is Implemented

- Monorepo workspace split into apps and packages
- Signup and signin with hashed passwords
- JWT-protected exchange routes
- Admin market creation
- Shared Prisma database package
- Prisma schema and migrations for users, markets, orders, and fills
- Redis request-response flow between backend and engine
- Basic order creation
- Basic collateral locking
- Market-price based immediate fills
- Limit order placement into bid or ask buckets
- Open order cancellation
- Position updates after fills
- Basic liquidation checks from mark-price updates
- Initial Bun test workspace

## Not Done Yet

- Full price-time-priority matching
- Partial fill handling
- Matching against opposite-side resting orders
- Fee accounting
- Funding payments
- Realized and unrealized PnL
- Isolated vs cross margin
- Robust liquidation engine
- Durable engine snapshots or event sourcing
- Database persistence for all engine state transitions
- WebSocket subscriptions for user/order/depth updates
- Rust implementation of the core engine
- Broader automated test coverage

## Planned Engine Direction

The long-term plan is to move the core engine to Rust and keep the TypeScript backend as the API layer.

The Rust engine should eventually own:

- order book storage
- matching loop
- balance and margin checks
- fill generation
- position accounting
- liquidation queue
- deterministic state transitions
- persistence or replay from an append-only event log

Likely data structures to explore:

- `BTreeMap` for sorted price levels
- `VecDeque` for FIFO orders at each price level
- hash maps for direct `orderId -> order` lookup
- heaps or priority queues for liquidation candidates
- append-only logs for replayable engine events

Target shape:

```text
backend API
  |
  | Redis / NATS / gRPC
  v
Rust matching engine
  |
  v
event log + snapshots + database projections
```

## Useful Commands

```bash
bun install
bun run dev
bun run dev --filter=backend
bun run dev --filter=engine
bun test apps/tests
bun run format
```

Database commands:

```bash
cd packages/db
bunx prisma generate
bunx prisma migrate dev
```

## Notes

This project intentionally starts with a simple TypeScript engine so the exchange flow is easy to inspect and modify. Once the behavior is clear, the performance-sensitive parts can be redesigned in Rust with stronger data-structure choices and stricter state management.

The main learning milestone is not just "place an order"; it is understanding every state transition caused by that order.
