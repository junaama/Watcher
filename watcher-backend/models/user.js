const mongoose = require("../db/connection.js");
// Requires mongoose variable exported from the connection.js file
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  date: {
    type: Date,
    default: Date.now,
  },
  schedule: [
    {
      ref: "Task",
      type: mongoose.Schema.Types.ObjectId
    }
  ],
 
});

const User = mongoose.model("User", userSchema);

module.exports = User;
