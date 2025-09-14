import express from "express";
import { connectDB } from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";
import contactRouter from "./routes/contactRouter.js";
dotenv.config();

//server
const app = express();
const port = process.env.PORT || 3000;

// Cors

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//middleware
app.use(express.json());

//routers
app.use("/contact", contactRouter);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`App runs on port ${port}`);
  });
});
