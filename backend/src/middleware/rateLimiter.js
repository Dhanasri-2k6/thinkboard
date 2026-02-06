import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  // rate limiting logic will go here

  try {
    // here we used my-limit-key as the unique identifier for the client,the concept is like if i sent 100 requests from my userid/ip it will block me for next 60 seconds,it shouldnt block some one with the other user id/ip
    // for now we dont have user authentication so we are using a static key here but in real world application we can use req.ip or req.user.id or any unique identifier for the client
    const { success } = await ratelimit.limit("my-limit-key");

    //  for now we can also usethe .ip
    // const { success } = await ratelimit.limit(req.ip);
    if (!success) {
      return res
        .status(429)
        .json({ message: "Too many requests, please try again later" });
    }
    next();
  } catch (error) {
    console.error("Rate limiting error:", error);
    return res.status(500).json({ message: "Internal server error" });
    next(error);
  }
};

export default rateLimiter;
