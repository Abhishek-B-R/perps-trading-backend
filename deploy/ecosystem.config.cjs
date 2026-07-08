// One PM2 process that runs the whole turborepo:
//   pm2 delete all && pm2 start deploy/ecosystem.config.cjs && pm2 save
// `bun run start` -> `turbo run start` -> backend + engine + poller (bun) + web (next start).
// ponytail: one process means one restart unit — if any app crashes, pm2
// restarts everything. Upgrade path: split back into per-app pm2 entries.
const ROOT = "/root/perps-trading-project";

module.exports = {
  apps: [
    {
      name: "perps",
      cwd: ROOT,
      script: "bun",
      args: "run start",
      interpreter: "none",
      exec_mode: "fork",
    },
  ],
};
