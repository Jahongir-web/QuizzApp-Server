const express = require("express");
const fileUpload = require("express-fileupload");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
const { PORT, MONGODB_URI } = require("./config");

const { authMiddleware } = require("./src/middlewares/authMiddleware");

const authRouter = require("./src/routers/authRouter");
const userRouter = require("./src/routers/userRouter");
const groupRouter = require("./src/routers/groupRouter");

const app = express();

// to save files for public
app.use(express.static("src/public"));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(fileUpload());

// Routes
app.use("/api/auth", authRouter);
app.use("/api/user", authMiddleware, userRouter);
app.use("/api/group", groupRouter);

app.get("/", (req, res) => {
  res.send("Quizz app");
});

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
  })
  .catch((error) => console.log(error));
