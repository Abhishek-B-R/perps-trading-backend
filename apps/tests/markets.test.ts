import { beforeAll, expect, it } from "bun:test";
import { adminHeaders, client, describeIntegration, expectStatus } from "./helpers";

describeIntegration("markets endpoints (public)", () => {
  let marketSlug = "SOL";

  beforeAll(async () => {
    const res = await client.post(
      "/admin/market",
      { symbol: "SOL", imageUrl: "https://example.com/sol.png" },
      adminHeaders(),
    );
    if (res.status === 201) marketSlug = "SOL";
    else {
      const markets = await client.get("/markets");
      const sol = markets.data.find(
        (m: { marketSlug: string }) => m.marketSlug === "SOL",
      );
      if (sol) marketSlug = sol.marketSlug;
    }
  });

  it("GET /markets returns an array", async () => {
    const res = await client.get("/markets");
    expectStatus(res, 200);
    expect(Array.isArray(res.data)).toBe(true);
  });

  it(`GET /markets/${marketSlug}/candles returns candlesticks`, async () => {
    const res = await client.get(
      `/markets/${marketSlug}/candles?interval=15m&limit=10`,
    );
    expectStatus(res, 200);
    expect(Array.isArray(res.data)).toBe(true);
    if (res.data.length > 0) {
      expect(res.data[0]).toMatchObject({
        time: expect.any(Number),
        open: expect.any(Number),
        high: expect.any(Number),
        low: expect.any(Number),
        close: expect.any(Number),
      });
    }
  });

  it(`GET /markets/${marketSlug}/ticker returns 24h stats`, async () => {
    const res = await client.get(`/markets/${marketSlug}/ticker`);
    expectStatus(res, 200);
    expect(res.data.symbol).toBeString();
    expect(typeof res.data.lastPrice).toBe("number");
  });

  it(`GET /markets/${marketSlug}/depth returns order book shape`, async () => {
    const res = await client.get(`/markets/${marketSlug}/depth`);
    expect([200, 400]).toContain(res.status);
    if (res.status === 200) {
      expect(res.data).toMatchObject({
        symbol: expect.any(String),
        bids: expect.any(Array),
        asks: expect.any(Array),
      });
    }
  });

  it(`GET /markets/${marketSlug}/price returns mark price shape`, async () => {
    const res = await client.get(`/markets/${marketSlug}/price`);
    expect([200, 400]).toContain(res.status);
    if (res.status === 200) {
      expect(typeof res.data.markPrice).toBe("number");
    }
  });
});
