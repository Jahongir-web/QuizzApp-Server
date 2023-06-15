const router = require("express").Router();
const categoryCtrl = require("../controller/categoryCtrl");
const { authMiddleware } = require("../middlewares/authMiddleware");

router.route("/").get(authMiddleware, categoryCtrl.getAllCategory).post(authMiddleware, categoryCtrl.addCategory);
router.route("/:id").put(authMiddleware, categoryCtrl.updCategory).delete(authMiddleware, categoryCtrl.delCategory);

module.exports = router;
