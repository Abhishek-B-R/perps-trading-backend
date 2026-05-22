import axios, { AxiosError } from "axios";
import { beforeAll, describe, expect, it } from "bun:test";
import { BACKEND } from "./config";
import { password } from "bun";

describe("auth endpoints", () => {
  const username = "abhishek-" + Math.random();
  const password = "123random";

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
        password,
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
      password,
    });
    expect(response.data.userId).not.toBe(undefined);
  });

  it("Signin should not work without username or password", async () => {
    try {
      const response = await axios.post(`${BACKEND}/signin`, {
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

  it("Signin should work with valid credentials", async () => {
    const response = await axios.post(`${BACKEND}/signin`, {
      username,
      password,
    });

    expect(response.data.token).not.toBe(undefined);
  });
});
