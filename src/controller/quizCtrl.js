const { Quiz, validation, validationUpd } = require("../models/quizModel");
const catchErrorAsync = require("../utility/catchAsync");

const quizCtrl = {
  getAllQuiz: catchErrorAsync(async (req, res) => {
    const quiz = await Quiz.find();
    res.status(200).json({ message: "quiz list", quizzes: quiz });
  }),
  addQuiz: catchErrorAsync(async (req, res) => {
    const { error } = validation(req.body);
    if (error) return res.status(500).json({ message: error.details[0].message });
    const quiz = await Quiz.create(req.body);
    res.status(201).json({ message: "quiz created successfully", quiz });
  }),
  updQuiz: catchErrorAsync(async (req, res) => {
    const { id } = req.params;
    const { error } = validationUpd(req.body);
    if (error) return res.status(500).json({ message: error.details[0].message });
    const quiz = await Quiz.findByIdAndUpdate(id, req.body, { new: true });
    if (!quiz) return res.status(404).json({ message: "quiz not found" });
    res.status(200).json({ message: "quiz updated successfully", quiz });
  }),
  delQuiz: catchErrorAsync(async (req, res) => {
    const { id } = req.params;
    const quiz = await Quiz.findByIdAndDelete(id);
    if (!quiz) return res.status(404).json({ message: "quiz not found" });
    res.status(200).json("quiz deleted successfully");
  }),
};

module.exports = quizCtrl;
