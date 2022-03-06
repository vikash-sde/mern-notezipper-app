const asynceHandler = require("express-async-handler");
const Note = require("../models/userModels");

const getNotes = asynceHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;
  const note = await Note.find();
res.json(notes)
 
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

module.exports = { getNotes, authUser };
