import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import dotenv from "dotenv";
dotenv.config();

// const { RateLimit, slidingWindow } = pkg;
// Create a new rate limiter, that allows 100 requests per 60 secons
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.fixedWindow(30, "60 s"),
});

export default ratelimit;
