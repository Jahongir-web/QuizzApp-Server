module.exports = (req, res, next) => {
  if (req.user.role === "teacher" || req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({ message: "You have not access" });
  }
};
