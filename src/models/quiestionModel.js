const mongoose = require("mongoose");
const Joi = require("joi");

const schema = new mongoose.Schema({
  quizQuestion: { type: String, required: true, minLength: 10, maxLength: 999 },
  correctAnswer: { type: String, required: true, minLength: 3, maxLength: 999 },
  choice1: { type: String, required: true, minLength: 1, maxLength: 999 },
  choice2: { type: String, required: true, minLength: 1, maxLength: 999 },
  choice3: { type: String, required: true, minLength: 1, maxLength: 999 },
  category: { type: mongoose.Types.ObjectId, required: true, ref: "Categories" },
});

const validation = (data) => {
  return Joi.object({
    name: Joi.string().max(255).required(),
    numberQuiz: Joi.number().max(1000).required(),
    quizTime: Joi.number().max(1000).required(),
  }).validate(data);
};
const validationUpd = (data) => {
  return Joi.object({
    name: Joi.string().max(255),
    numberQuiz: Joi.number().max(1000),
    quizTime: Joi.number().max(1000),
  }).validate(data);
};

const Question = mongoose.model("quizzis", schema);

module.exports = { Question, validation, validationUpd };
