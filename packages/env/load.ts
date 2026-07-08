import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { config } from "dotenv";

/** Find monorepo root by walking up until turbo.json or workspace package.json. */
function findRepoRoot(start: string): string | null {
  let dir = start;
  for (let i = 0; i < 8; i++) {
    if (
      existsSync(resolve(dir, "turbo.json")) ||
      existsSync(resolve(dir, "bun.lock"))
    ) {
      return dir;
    }
    const parent = dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return null;
}

export function loadRootEnv(): void {
  const candidates = new Set<string>();

  const fromPackage = resolve(
    dirname(fileURLToPath(import.meta.url)),
    "../..",
  );
  candidates.add(resolve(fromPackage, ".env"));

  const fromCwd = findRepoRoot(process.cwd());
  if (fromCwd) candidates.add(resolve(fromCwd, ".env"));

  for (const path of candidates) {
    if (existsSync(path)) {
      config({ path, override: false });
      return;
    }
  }
}

loadRootEnv();
