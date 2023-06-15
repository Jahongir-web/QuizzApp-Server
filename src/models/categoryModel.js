const { Schema, model } = require("mongoose");
const Joi = require("joi");

const schema = new Schema({ name: { type: String, required: true, maxLength: 255 } }, { timestamps: true });

const validation = (data) => {
  return Joi.object({
    name: Joi.string().required().max(255),
  }).validate(data);
};
const validationUpd = (data) => {
  return Joi.object({
    name: Joi.string().max(255),
  }).validate(data);
};

const Category = model("Categories", schema);

module.exports = { Category, validation, validationUpd };
