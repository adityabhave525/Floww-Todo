const Task = require("../models/task");

async function createTask(req, res) {
  const { title, description } = req.body;

  try {
    const task = await Task.create({
      title,
      description,
      user: req.user.id,
    });

    res.status(201).json({
      task,
    });
  } catch (e) {
    res.status(500).json({
      message: "Server Error",
    });
  }
}

async function listTasks(req, res) {
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.json(tasks);
  } catch (e) {
    res.status(500).json({
      message: "Server Error",
    });
  }
}

async function updateTask(req, res) {
  const { title, description, is_completed } = req.body;

  try {
    let task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({
        message: "Task Not Found",
      });
    }

    task.title = title || task.title;
    task.description = description || task.description;
    task.is_completed = is_completed || task.is_completed;

    await task.save();
    res.json({
      task,
    });
  } catch (e) {
    res.status(500).json({
      message: "Server Error",
    });
  }
}

async function deleteTask(req, res) {
  try {
    const task = await Task.findById(req.params.id);
    if (task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    await task.remove();
    res.json({ message: "Task deleted" });
  } catch (e) {
    res.status(500).json({
      message: "Server Error",
    });
  }
}

module.exports = {
  createTask,
  listTasks,
  updateTask,
  deleteTask,
};
