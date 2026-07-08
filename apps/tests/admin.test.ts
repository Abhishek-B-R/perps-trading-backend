import { expect, it } from "bun:test";
import { adminHeaders, client, describeIntegration, expectStatus, uniqueId } from "./helpers";

describeIntegration("admin endpoints", () => {
  const symbol = uniqueId("TST").slice(0, 8).toUpperCase();

  it("POST /admin/market rejects missing admin token", async () => {
    const res = await client.post("/admin/market", {
      symbol,
      imageUrl: "https://example.com/icon.png",
    });
    expectStatus(res, 403);
  });

  it("POST /admin/market rejects invalid body", async () => {
    const res = await client.post("/admin/market", {}, adminHeaders());
    expectStatus(res, 411);
  });

  it("POST /admin/market creates a market", async () => {
    const res = await client.post(
      "/admin/market",
      { symbol, imageUrl: "https://example.com/icon.png" },
      adminHeaders(),
    );
    expectStatus(res, 201);
    expect(res.data.id).toBeString();
    expect(res.data.message).toBe("market created");
  });

  it("POST /admin/market rejects duplicate symbol", async () => {
    const res = await client.post(
      "/admin/market",
      { symbol, imageUrl: "https://example.com/icon.png" },
      adminHeaders(),
    );
    expect(res.status).toBeGreaterThanOrEqual(400);
  });
});
