const { Schema, model } = require("mongoose");
const Joi = require("joi");

const schema = new Schema(
  {
    name: { type: String, required: true },
    company: { type: String, required: true, enum: ["Webstar", "Mars", "Merit"] },
  },
  { timestamps: true }
);

const validation = (data) => {
  return Joi.object({
    name: Joi.string().required().max(255),
    company: Joi.string().required().max(255),
  }).validate(data);
};
const validationUpd = (data) => {
  return Joi.object({
    name: Joi.string().max(255),
    company: Joi.string().max(255),
  }).validate(data);
};

const Group = model("Groups", schema);

module.exports = { Group, validation, validationUpd };
