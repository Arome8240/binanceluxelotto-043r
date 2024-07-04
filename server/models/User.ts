import mongoose from "mongoose";
const schema: mongoose.Schema = new mongoose.Schema(
  {
    email: { type: String },
    password: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("User", schema);
