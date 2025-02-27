const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const { connectToMongoDB } = require("./config/db");

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

connectToMongoDB();

app.get("/", (req, res) => {
  res.send("Hi there");
});

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
