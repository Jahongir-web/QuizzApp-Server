const { Category, validation, validationUpd } = require("../models/categoryModel");
const { removeTemp, uploadedFile, deleteFile } = require("../service/upload");
const catchErrorAsync = require("../utility/catchAsync");

const categoryQuizCtrl = {
  getAllCategory: catchErrorAsync(async (req, res) => {
    const categories = await Category.find();
    res.status(200).json({ message: "category list", categories });
  }),
  addCategory: catchErrorAsync(async (req, res) => {
    const { error } = validation(req.body);
    if (error) return res.status(500).json({ message: error.details[0].message });
    if (!req.files || !req.files.image) return res.status(404).json({ message: "image not found" });

    // create image
    const image = req.files.image;
    if (image.mimetype !== "image/jpeg" && image.mimetype !== "image/png") {
      removeTemp(image.tempFilePath);
      return res.status(400).json({ message: "File format is should png or jpeg!" });
    }
    const img = await uploadedFile(image);
    req.body.image = img;

    const category = await Category.create(req.body);
    res.status(201).json({ message: "category created successfully", category });
  }),
  updCategory: catchErrorAsync(async (req, res) => {
    const { id } = req.params;
    const { error } = validationUpd(req.body);
    if (error) return res.status(500).json({ message: error.details[0].message });

    const categoryById = await Category.findById(id);
    if (!categoryById) return res.status(404).json({ message: "category not found" });

    if (req.files) {
      if (req.files.image) {
        const image = req.files.image;
        if (image.mimetype !== "image/jpeg" && image.mimetype !== "image/png") {
          removeTemp(image.tempFilePath);
          return res.status(400).json({ message: "File format is should png or jpeg!" });
        }

        const img = await uploadedFile(image);
        req.body.image = img;
        if (categoryById.image) {
          await deleteFile(categoryById.image?.public_id);
        }
      }
    }
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
