const QuestionCtrl = require("../controller/questionCtrl");
const router = require("express").Router();
const { authMiddleware } = require("../middlewares/authMiddleware");

router.get("/", authMiddleware, QuestionCtrl.getAllQuestion);
router.post("/", authMiddleware, QuestionCtrl.addQuestion);
router.delete("/:id", authMiddleware, QuestionCtrl.delQuestion);

module.exports = router;
