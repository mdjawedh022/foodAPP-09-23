const mongoose = require("mongoose");
require("dotenv").config()
exports.connectDatabase = async () => {
  try {
    await mongoose
      .connect("mongodb://127.0.0.1:27017/kfc")
      .then((con) => console.log("Database is connected"));
  } catch (err) {
    console.log(err);
  }
};

// module.exports=connectDatabase
