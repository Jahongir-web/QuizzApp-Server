const { Group, validation, validationUpd } = require("../models/groupModel");
const { catchErrorAsync } = require("../utility/catchAsync");

// exports.GetAllGroup = () => {}
const groupCtrl = {
  getAllGroup: catchErrorAsync(async (req, res) => {
    const group = await Group.find();
    res.status(200).json({ message: "group success retrived", groups: group });
  }),
  addGroup: catchErrorAsync(async (req, res) => {
    const { error } = validation(req.body);
    if (error) return res.status(500).json({ message: error.details[0].message });
    const group = await Group.create(req.body);
    res.status(201).json({ message: "group success created", group });
  }),
  delGroup: async () => {},
  updGroup: async () => {},
};

// const getAllTours = catchErrorAsync(async (req, res) => {
//   // 1) Get all tours
//   const tours = await Tour.find();

//   res.status(200).render("overview", {
//     title: "All tours",
//     tours: tours,
//   });
// });
