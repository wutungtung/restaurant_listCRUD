const mongoose = require("mongoose");
const restaurant = require("../restaurant");
const restaurantList = require("./restaurant.json").results;

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

mongoose.connect("process.env.MONGODB_URI", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", () => {
  console.log("mongoDB error!");
});

db.once("open", () => {
  console.log("mongoDB connected!");
});
