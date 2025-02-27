const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const { connectToMongoDB } = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

connectToMongoDB();

app.use("/api", authRoutes);
app.use("/api/tasks", taskRoutes);

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
