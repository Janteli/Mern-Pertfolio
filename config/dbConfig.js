const mongoose = require("mongoose");

const connection = mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB is connected");
  })
  .catch((err) => {
    console.error("Error while connecting to DB:", err);
  });

  module.exports = connection;
