const asynceHandler = require("express-async-handler");
const Note = require("../models/noteModels");

const getNotes = asynceHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;
  const notes = await Note.find();
  res.json(notes);
});

module.exports = { getNotes };
