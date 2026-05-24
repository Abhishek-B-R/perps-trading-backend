import { responseClient } from "../..";
import type { EngineEventType } from "../store/exchange-store";
import { env } from "env";

export async function PublishToEngine(
  type: EngineEventType,
  payload: Record<string, unknown>,
): Promise<void> {
  await responseClient.xAdd(
    env.engineEventStream,
    "*",
    {
      eventId: crypto.randomUUID(),
      type,
      payload: JSON.stringify(payload),
      timestamp: Date.now().toString(),
    },
    {
      TRIM: {
        strategy: "MAXLEN",
        strategyModifier: "~",
        threshold: 100000,
      },
    },
  );
}
