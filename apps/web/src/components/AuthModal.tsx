"use client";

import { useState } from "react";
import { api } from "@/lib/api";
import { useAuth } from "@/lib/auth";
import { X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export function AuthModal({ open, onClose }: Props) {
  const { login } = useAuth();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const fn = mode === "signin" ? api.signin : api.signup;
      const { token } = await fn(username, password);
      login(token);
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : "auth failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-sm rounded-xl border border-border bg-surface p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-muted hover:text-text"
        >
          <X size={18} />
        </button>

        <h2 className="mb-1 text-lg font-bold">
          {mode === "signin" ? "Welcome back" : "Create account"}
        </h2>
        <p className="mb-6 text-sm text-muted">
          {mode === "signin"
            ? "Sign in to start trading"
            : "Sign up to get started"}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-full rounded-lg border border-border bg-bg px-3 py-2.5 text-sm outline-none focus:border-accent"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full rounded-lg border border-border bg-bg px-3 py-2.5 text-sm outline-none focus:border-accent"
            required
          />
          {error && <p className="text-xs text-short">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-accent py-2.5 text-sm font-semibold text-white disabled:opacity-50"
          >
            {loading ? "…" : mode === "signin" ? "Sign In" : "Sign Up"}
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-muted">
          {mode === "signin" ? "No account?" : "Have an account?"}{" "}
          <button
            onClick={() =>
              setMode(mode === "signin" ? "signup" : "signin")
            }
            className="text-accent hover:underline"
          >
            {mode === "signin" ? "Sign up" : "Sign in"}
          </button>
        </p>
      </div>
    </div>
  );
}
