const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    group: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: 'student',
      enum:['student', 'teacher', 'admin'] 
    },
    profilePicture: {
      type: Object,
      default: null,
    },
    history: {
      type: Array,
      default: [],
    },
    accessExam: {
      type: Boolean,
      default: false,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", UserSchema);