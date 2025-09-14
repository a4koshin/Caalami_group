import mongoose from "mongoose";
import contactModal from "../model/contact.js";
export const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      res.json({
        success: false,
        message: "All fields are required",
      });
    }
    const sendMssg = new contactModal({
      name: name,
      email: email,
      message: message,
    });

    await sendMssg.save();
    res.status(201).json({
      success: true,
      message: "Message sending successfully",
      mssge: sendMssg,
    });
  } catch (error) {
    console.log("Error Occured ", error);
  }
};

export const getMessage = async (req, res) => {
  try {
    const getMssge = await contactModal.find().sort({ createdAt: -1 });
    res
      .status(200)
      .json({ success: true, message: "Success fetched", getmssg: getMssge });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
