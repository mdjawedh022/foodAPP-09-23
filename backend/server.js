const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const products = require("./routes/products");
const { connectDatabase } = require("./config/config");
const cors=require('cors');
const cloudinary = require('cloudinary').v2
connectDatabase();
app.use(cors())
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended:true}))
app.use(`/api/v1`, products);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})


app.use((err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  //wrong mongoose object Id error
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    error = new Error(message);
  }

  //Handle mongoose validation error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((value) => value.message);
    error = new Error(message);
  }

  //Handle mongoose duplicate key errors
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)}entered`;
    error = new Error(message);
  }

  //Handling wrong JWT error
  if (err.name === "JsonWebTokenError") {
    const message = "JSON web Token is invalid.try again!!";
    error = new Error(message);
  }

  //Handling Expired JWT error
  if (err.name === "TokenExpiredError") {
    const message = "Json web Token  is expired.Try again!!!";
    error = new Error(message);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || "Internal Server Error",
  });
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on ${process.env.PORT}`);
});

// try {
//   await connectDatabase();
//   console.log("connect with db");
// } catch (err) {
//   console.log("something wrong!");
//   console.log(err);
// }
// app.use(bodyParser());
// const bodyParser = require("body-parser");
