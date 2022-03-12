const asynceHandler = require("express-async-handler");
const Note = require("../models/noteModels");

const getNotes = asynceHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;
  const notes = await Note.find({ user: req.user._id });
  res.json(notes);
});

const createNote = asynceHandler(async (req, res) => {
  const { title, content, category } = req.body;
  if (!title || !content || !category) {
    res.status(400);
    throw new Error("please fill all the fields");
  } else {
    const note = new Note({
      user: req.user._id,
      title: title,
      content: content,
      category: category,
    });

    const createNote = await note.save();
    res.status(201).json(createNote);
  }
});

const getNoteById = asynceHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ message: "Note not found" });
  }
});

const updateNote = asynceHandler(async (req, res) => {
  const { title, content, category } = req.body;

  const note = await Note.findById(req.params.id);

  if (note.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't edit this");
  }

  if (note) {
    note.title = title;
    note.content = content;
    note.category = category;

    const updateNote = await note.save();
    res.json(updateNote);
  } else {
    res.status(404);
    throw new Error("note not found");
  }
});

const deleteNote = asynceHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (note.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't edit this");
  }

  if (note) {
    await note.remove();
    res.json({ message: "note has been deleted" });
  } else {
    res.status(404);
    throw new Error("note not found");
  }
});

module.exports = { getNotes, createNote, getNoteById, updateNote, deleteNote };
