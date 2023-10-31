const mongoose = require("mongoose");
const Restaurant = require("../restaurants");
const restaurantList = require("../../restaurant.json").results;

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
mongoose.connect(process.env.NODE_ENV, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", () => {
  console.log("mongoDB error");
});

db.once("open", () => {
  console.log("mongoDB connected");
  Restaurant.create(restaurantList)
    .then(() => {
      console.log("run seed done");
    })
    .catch(() => console.log("error"));
});
