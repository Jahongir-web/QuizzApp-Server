const router = require("express").Router();
const groupCtrl = require("../controller/groupCtrl");
const { authMiddleware } = require("../middlewares/authMiddleware");

router.route("/").get(groupCtrl.getAllGroup).post(authMiddleware, groupCtrl.addGroup);
router.route("/:id").patch(authMiddleware, groupCtrl.updGroup).delete(authMiddleware, groupCtrl.delGroup);

module.exports = router;
