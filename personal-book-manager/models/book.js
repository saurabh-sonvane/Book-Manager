import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  author: String,
  tags: [String],
  status: {
    type: String,
    enum: ["want", "reading", "completed"],
    default: "want",
  },
}, { timestamps: true });

export default mongoose.models.Book || mongoose.model("Book", bookSchema);