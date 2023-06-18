// const { Group, validation, validationUpd } = require("../models/groupModel");
// const catchErrorAsync = require("../utility/catchAsync");

// const groupCtrl = {
//   getAllGroup: catchErrorAsync(async (req, res) => {
//     const group = await Group.find();
//     res.status(200).json({ message: "group list", groups: group });
//   }),
//   addGroup: catchErrorAsync(async (req, res) => {
//     const { error } = validation(req.body);
//     if (error) return res.status(500).json({ message: error.details[0].message });
//     const group = await Group.create(req.body);
//     res.status(201).json({ message: "group created successfully", group });
//   }),
//   updGroup: catchErrorAsync(async (req, res) => {
//     const { id } = req.params;
//     const { error } = validationUpd(req.body);
//     if (error) return res.status(500).json({ message: error.details[0].message });
//     const group = await Group.findByIdAndUpdate(id, req.body, { new: true });
//     if (!group) return res.status(404).json({ message: "group not found" });
//     res.status(200).json({ message: "group updated successfully", group });
//   }),
//   delGroup: catchErrorAsync(async (req, res) => {
//     const { id } = req.params;
//     const group = await Group.findByIdAndDelete(id);
//     if (!group) return res.status(404).json({ message: "group not found" });
//     res.status(200).json("group deleted successfully");
//   }),
// };

// module.exports = groupCtrl;
