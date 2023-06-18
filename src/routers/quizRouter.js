const router = require("express").Router();
const quizCtrl = require("../controller/quizCtrl");
const { authMiddleware } = require("../middlewares/authMiddleware");

router.route("/").get(authMiddleware, quizCtrl.getAllQuiz).post(authMiddleware, quizCtrl.addQuiz);
router
  .route("/:id")
  .get(authMiddleware, quizCtrl.getOneQuiz)
  .put(authMiddleware, quizCtrl.updQuiz)
  .delete(authMiddleware, quizCtrl.delQuiz);

module.exports = router;
