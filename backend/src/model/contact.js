import mongoose, { mongo } from "mongoose";

const contactSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  message: { type: String, required: true },
});

const contactModal = mongoose.model("Contact", contactSchema);

export default contactModal;
