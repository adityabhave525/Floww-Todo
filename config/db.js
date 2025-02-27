const mongoose = require("mongoose");

async function connectToMongoDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (e) {
    console.error(e.message);
  }
}

module.exports = {
  connectToMongoDB,
};
