const router = require("express").Router();

const userCtrl = require("../controller/userCtrl");
const { authMiddleware } = require("../middlewares/authMiddleware");

router.get("/:id", authMiddleware, userCtrl.getUser);
router.get("/", authMiddleware, userCtrl.getAllUsers);
router.put("/:id", authMiddleware, userCtrl.updateUser);
router.delete("/:id", authMiddleware, userCtrl.deleteUser);

module.exports = router;
