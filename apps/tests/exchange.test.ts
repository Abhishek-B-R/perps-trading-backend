import { beforeAll, expect, it } from "bun:test";
import {
  adminHeaders,
  client,
  authHeaders,
  describeIntegration,
  expectStatus,
  signupUser,
  uniqueId,
} from "./helpers";

describeIntegration("exchange endpoints (auth + engine)", () => {
  const password = "exchange-test-pw";
  const username = uniqueId("trader");
  let token = "";
  let marketId = "";
  let orderId = "";

  beforeAll(async () => {
    const marketRes = await client.post(
      "/admin/market",
      { symbol: "SOL", imageUrl: "https://example.com/sol.png" },
      adminHeaders(),
    );
    if (marketRes.status === 201) {
      marketId = marketRes.data.id;
    } else {
      const markets = await client.get("/markets");
      const sol = markets.data.find(
        (m: { id: string; marketSlug: string }) => m.marketSlug === "SOL",
      );
      if (!sol) throw new Error("SOL market required for exchange tests");
      marketId = sol.id;
    }

    const signup = await signupUser(username, password);
    expectStatus(signup, 201);
    token = signup.data.token;
  });

  it("rejects unauthenticated requests", async () => {
    const res = await client.get("/equity/available");
    expectStatus(res, 401);
  });

  it("POST /onramp credits collateral", async () => {
    const res = await client.post("/onramp", { price: 10_000 }, authHeaders(token));
    expectStatus(res, 200);
    expect(res.data.status).toBe("success");
  });

  it("GET /equity/available returns balance", async () => {
    const res = await client.get("/equity/available", authHeaders(token));
    expectStatus(res, 200);
    expect(res.data.available).toBeGreaterThanOrEqual(0);
    expect(res.data.total).toBeGreaterThanOrEqual(res.data.available);
  });

  it("POST /order rejects invalid body", async () => {
    const res = await client.post("/order", { qty: 1 }, authHeaders(token));
    expectStatus(res, 411);
  });

  it("POST /order places a limit order", async () => {
    const res = await client.post(
      "/order",
      {
        orderType: "limit",
        positionType: "long",
        equity: 100,
        market: "SOL",
        price: 1,
        qty: 1,
      },
      authHeaders(token),
    );
    expectStatus(res, 200);
    expect(res.data.orderId).toBeString();
    expect(res.data.status).toBeString();
    orderId = res.data.orderId;
  });

  it("GET /orders/open/:marketId returns open orders", async () => {
    const res = await client.get(
      `/orders/open/${marketId}`,
      authHeaders(token),
    );
    expectStatus(res, 200);
    expect(Array.isArray(res.data)).toBe(true);
  });

  it("GET /orders/:orderId returns order or 404", async () => {
    const res = await client.get(`/orders/${orderId}`, authHeaders(token));
    expect([200, 404]).toContain(res.status);
  });

  it("GET /positions/open/:marketId returns positions", async () => {
    const res = await client.get(
      `/positions/open/${marketId}`,
      authHeaders(token),
    );
    expectStatus(res, 200);
    expect(Array.isArray(res.data.positions)).toBe(true);
  });

  it("GET /positions/closed/:marketId returns closed positions", async () => {
    const res = await client.get(
      `/positions/closed/${marketId}`,
      authHeaders(token),
    );
    expectStatus(res, 200);
    expect(Array.isArray(res.data.positions)).toBe(true);
  });

  it("GET /fills returns trade history", async () => {
    const res = await client.get("/fills", authHeaders(token));
    expectStatus(res, 200);
    expect(Array.isArray(res.data)).toBe(true);
  });

  it("GET /depth/:marketId returns depth", async () => {
    const res = await client.get(`/depth/${marketId}`, authHeaders(token));
    expectStatus(res, 200);
    expect(res.data.bids).toBeArray();
    expect(res.data.asks).toBeArray();
  });

  it("GET /price/:marketId returns mark price", async () => {
    const res = await client.get(`/price/${marketId}`, authHeaders(token));
    expect([200, 400]).toContain(res.status);
    if (res.status === 200) {
      expect(typeof res.data.markPrice).toBe("number");
    }
  });

  it("DELETE /order/:orderId cancels the order", async () => {
    const res = await client.delete(`/order/${orderId}`, authHeaders(token));
    expect([200, 400]).toContain(res.status);
  });
});
