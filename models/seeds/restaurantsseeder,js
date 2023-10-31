const mongoose = require("mongoose");
const restaurants = require("../restaurants");
const restaurantList = require("../../restaurant.json").results;

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const db = mongoose.connection;

db.on("error", () => {
  console.log("mongoDB error");
});

db.once("open", () => {
  console.log("mongoDB connected");
  restaurants.create(restaurantList).then(() => {
    console.log("run seed done");
  });
});
