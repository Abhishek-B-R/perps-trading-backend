import axios, { AxiosError } from "axios";
import { beforeAll, describe, expect, it } from "bun:test";
import { BACKEND } from "./config";
import { password } from "bun";

describe("auth endpoints", () => {
  const username = "abhishek-" + Math.random();

  it("Signup without password should not work", async () => {
    try {
      const response = await axios.post(`${BACKEND}/signup`, {
        username,
      });

      expect().fail();
    } catch (e) {
      if (e instanceof AxiosError) {
        expect(e.response?.status).toBe(411);
      } else {
        expect().fail();
      }
    }
  });

  it("Signup without username should not work", async () => {
    try {
      const response = await axios.post(`${BACKEND}/signup`, {
        password: "123random",
      });
      expect().fail();
    } catch (e) {
      if (e instanceof AxiosError) {
        expect(e.response?.status).toBe(411);
      } else {
        expect().fail();
      }
    }
  });

  it("Signup should work on valid inputs", async () => {
    const response = await axios.post(`${BACKEND}/signup`, {
      username,
      password: "123random",
    });
    expect(response.data.userId).not.toBe(undefined);
  });
});
