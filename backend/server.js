const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();

dotenv.config(app);

connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);

app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;

console.log(process.env.PORT);


app.listen(PORT, console.log(`Server started on port ${PORT}`));
