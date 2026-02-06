import express from "express";
import { connect } from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();
// console.log(process.env.MONGO_URI);
const app = express();
const PORT = process.env.PORT || 5002;

// middleware should be placed here only (before )  app.use("/api/notes", notesRoutes);

// middleware

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use(express.json());
app.use(rateLimiter);
// this is a simple custom middleware that we can use
// app.use((req,res,next)=>{
//     console.log("we just got a new request");
//     next();
// })

app.use("/api/notes", notesRoutes);

// for more simply create the nroutes and controller like below and use
// app.use("/api/products",productRoutes);
// app.use("/api/users",userRoutes);,etc

// endpoint: combination of url+http method that lets the client interact with the specific resource

// this is called the route
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

// uptonow our output is 1st our application starts and then  db connects ,now to change this we wrote app.listen inside the connectDB().then() so that first db connects and then server starts
