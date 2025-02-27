const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  createTask,
  listTasks,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

const router = express.Router();

router.use(authMiddleware);

router.post("/", createTask);
router.get("/", listTasks);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
