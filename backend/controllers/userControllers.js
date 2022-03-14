const asynceHandler = require("express-async-handler");
const User = require("../models/userModels");
const generateToken = require("../utils/generateToken");

const registerUser = asynceHandler(async (req, res) => {
  //mongoodb query
  const { name, email, password, pic } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error(`User ${name} already exists`);
  }
  const user = await User.create({ name, email, password, pic });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Error Occured!");
  }
});

const authUser = asynceHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("invalid email and password");
  }
});

const updateUserProfile = asynceHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.pic = req.body.pic || user.pic;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updateUserProfile = await user.save();
    res.json({
      _id: updateUserProfile._id,
      name: updateUserProfile.name,
      email: updateUserProfile.email,
      pic: updateUserProfile.pic,
      token: generateToken(updateUserProfile._id),
    });
  } else {

    res.status(400);
    throw new Error("user not found");
  }
});

module.exports = { registerUser, authUser, updateUserProfile };
