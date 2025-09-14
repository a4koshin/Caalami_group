import express from "express";
import { sendMessage, getMessage } from "../controllers/sendMessage.js";
const contactRouter = express.Router();

contactRouter.post("/", sendMessage);
contactRouter.get("/", getMessage);

export default contactRouter;
