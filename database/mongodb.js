const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/entertainmentDB")

  .then(() => {
    console.log("Mongodb Database Created");
  })
  .catch((err) => {
    console.log("Failed to Create Database:", err);
  });

//Creating the Document or table or schema
// mongodb://localhost:27017mongodb://localhost:27017/?directConnection=true

const LoginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});

const collection = new mongoose.model("Collection1", LoginSchema);

module.exports = collection;
