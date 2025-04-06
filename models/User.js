const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, unique: true },
  firstname: { type: String, requered: true },
  lastname: String,
  age: { type: Number, min: 0, max: 199 },
},
{timestamps:true});

module.exports = mongoose.model("User", userSchema);
// module.exports = mongoose.Model("User", userSchema);
