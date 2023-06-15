const { Category, validation, validationUpd } = require("../models/categoryModel");
const catchErrorAsync = require("../utility/catchAsync");

const categoryQuizCtrl = {
  getAllCategory: catchErrorAsync(async (req, res) => {
    const categories = await Category.find();
    res.status(200).json({ message: "category list", categories });
  }),
  addCategory: catchErrorAsync(async (req, res) => {
    const { error } = validation(req.body);
    if (error) return res.status(500).json({ message: error.details[0].message });
    const category = await Category.create(req.body);
    res.status(201).json({ message: "category created successfully", category });
  }),
  updCategory: catchErrorAsync(async (req, res) => {
    const { id } = req.params;
    const { error } = validationUpd(req.body);
    if (error) return res.status(500).json({ message: error.details[0].message });
    const category = await Category.findByIdAndUpdate(id, req.body, { new: true });
    if (!category) return res.status(404).json({ message: "category not found" });
    res.status(200).json({ message: "category updated successfully", category });
  }),
  delCategory: catchErrorAsync(async (req, res) => {
    const { id } = req.params;
    const category = await Category.findByIdAndDelete(id);
    if (!category) return res.status(404).json({ message: "category not found" });
    res.status(200).json("category deleted successfully");
  }),
};

module.exports = categoryQuizCtrl;
