const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModels");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = JSON.parse(req.headers.authorization.split(" ")[1]);
      //decode token _id
      const decode = jwt.verify(token, "vikash1234");


      req.user = await User.findById(decode.id).select("-passsword");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized , token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized , no token");
  }
});

module.exports = { protect };
