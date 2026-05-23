export interface RedisStreamResponse {
  name: string;
  messages: {
    id: string;
    message: {
      payload: string;
      correlationId?: string;
    };
  }[];
}
