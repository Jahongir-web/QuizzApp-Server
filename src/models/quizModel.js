const mongoose = require("mongoose");
const Joi = require("joi");

const schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    categoryId: { type: mongoose.Types.ObjectId, required: true, maxLength: 255, ref: "Categories" },
    countQuiz: { type: Number, required: true },
    quizTime: { type: Number, require: true },
  },
  { timestamps: true }
);

const validation = (data) => {
  return Joi.object({
    title: Joi.string().max(255).required(),
    categoryId: Joi.string().required(),
    countQuiz: Joi.number().max(1000).required(),
    quizTime: Joi.number().max(1000).required(),
  }).validate(data);
};
const validationUpd = (data) => {
  return Joi.object({
    title: Joi.string().max(255),
    categoryId: Joi.string().max(255),
    countQuiz: Joi.number().max(1000),
    quizTime: Joi.number().max(1000),
  }).validate(data);
};

const Quiz = mongoose.model("quiz", schema);

module.exports = { Quiz, validation, validationUpd };
