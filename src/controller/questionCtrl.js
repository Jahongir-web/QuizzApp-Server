const { Question } = require("../models/quiestionModel");

module.exports = {
  getAllQuestion: async function (req, res) {
    const question = await Question.find();
    res.status(200).json({ question, message: "question successfull retrived" });
  },
  addQuestion: async function (req, res) {
    const { quizQuestion, correctAnswer, choice1, choice2, choice3, category } = req.body;
    const question = await Question.create({ quizQuestion, correctAnswer, choice1, choice2, choice3, category });
    res.status(201).json({ question, message: "Question added successfully" });
  },
  delQuestion: async function (req, res) {
    const question = await Question.findByIdAndDelete(req.params.id);
    if (!question) return res.status(400).json({ succes: false, message: "Qo'y kalla o'chirib bo'gansan" });
    res.status(202).json({ succes: true, message: "deleted question successfully" });
  },
};
