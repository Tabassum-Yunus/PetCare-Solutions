const { JsonWebTokenError } = require("jsonwebtoken");
const ErrorHander = require("../utils/errorhander");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // Wrong Mongodb ID Error
  if(err.name === "CastError"){
    const message = `Resource not found. Invalid: ${err.path}`;
    err = new ErrorHander(message,400);
  }


// Mongoose duplicate key error
if(err.code === 11000){
  const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
  err = new ErrorHander(message,400);
}

// Wrong jWT error
if(err.code === "JsonWebTokenError"){
  const message = `Json Web Token is invalid, Try again`;
  err = new ErrorHander(message,400);
}

// jWT expire error
if(err.code === "TokenExpiredError"){
  const message = `Json Web Token is Expired, Try again`;
  err = new ErrorHander(message,400);
}


  res.status(err.statusCode).json({
    success: false,
    message : err.message
  });
};




