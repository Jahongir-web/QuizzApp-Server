const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const { authMiddleware } = require("./src/middlewares/authMiddleware");

const ErrorController = require("./src/controller/errorController");
const authRouter = require("./src/routers/authRouter");
const userRouter = require("./src/routers/userRouter");
// const groupRouter = require("./src/routers/groupRouter");
// const categoryRouter = require("./src/routers/categoryRouter");
// const quizRouter = require("./src/routers/quizRouter");
// const questionRouter = require("./src/routers/questionRouter");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(fileUpload());

// Routes
app.use("/api/auth", authRouter);
app.use("/api/user", authMiddleware, userRouter);
// app.use("/api/group", groupRouter);
// app.use("/api/category", categoryRouter);
// app.use("/api/quiz", quizRouter);
// app.use("/api/question", questionRouter);

app.get("/", (req, res) => res.send("Quizz app"));

app.use(ErrorController);

module.exports = app;
