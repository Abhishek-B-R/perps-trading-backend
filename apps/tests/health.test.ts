import { expect, it } from "bun:test";
import { client, describeIntegration, expectStatus } from "./helpers";

describeIntegration("GET /health", () => {
  it("returns ok when backend and redis are up", async () => {
    const res = await client.get("/health");
    expectStatus(res, 200);
    expect(res.data.ok).toBe("true");
  });
});
