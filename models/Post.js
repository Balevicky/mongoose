const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: { type: String, required: true },
    content: String,
    status: {
      type: String,
      enum: ["DRAFT", "PUBLISHED"],
    },
    author: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Post", postSchema);
