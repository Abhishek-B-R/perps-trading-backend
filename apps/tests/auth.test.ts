import { expect, it } from "bun:test";
import {
  client,
  describeIntegration,
  expectStatus,
  signinUser,
  signupUser,
  uniqueId,
} from "./helpers";

describeIntegration("auth endpoints", () => {
  const password = "test-password-123";
  const username = uniqueId("user");

  it("POST /signup rejects missing password", async () => {
    const res = await client.post("/signup", { username });
    expectStatus(res, 411);
    expect(res.data.error).toBe("validation_error");
  });

  it("POST /signup rejects missing username", async () => {
    const res = await client.post("/signup", { password });
    expectStatus(res, 411);
  });

  it("POST /signup creates a user", async () => {
    const res = await signupUser(username, password);
    expectStatus(res, 201);
    expect(res.data.userId).toBeString();
    expect(res.data.token).toBeString();
    expect(res.data.username).toBe(username);
  });

  it("POST /signup rejects duplicate username", async () => {
    const res = await signupUser(username, password);
    expectStatus(res, 409);
    expect(res.data.error).toBe("username already exists");
  });

  it("POST /signin rejects missing fields", async () => {
    const res = await client.post("/signin", { username });
    expectStatus(res, 411);
  });

  it("POST /signin rejects wrong password", async () => {
    const res = await signinUser(username, "wrong-password");
    expectStatus(res, 403);
  });

  it("POST /signin returns token for valid credentials", async () => {
    const res = await signinUser(username, password);
    expectStatus(res, 201);
    expect(res.data.token).toBeString();
    expect(res.data.userId).toBeString();
  });
});
