const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const { authMiddleware } = require("./src/middlewares/authMiddleware");
const AppError = require("./src/utility/appError");

const ErrorController = require("./src/controller/errorController");
const authRouter = require("./src/routers/authRouter");
const userRouter = require("./src/routers/userRouter");
const groupRouter = require("./src/routers/groupRouter");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(fileUpload());

// Routes
app.use("/api/auth", authRouter);
app.use("/api/user", authMiddleware, userRouter);
app.use("/api/group", groupRouter);

app.get("/", (req, res) => res.send("Quizz app"));

app.all("*", function (req, res, next) {
  next(new AppError(`this url has not found: ${req.originalUrl}`, 404));
});
app.use(ErrorController);

module.exports = app;
