const express = require("express");
const exphbs = require("express-handlebars");
const restaurantData = require("./restaurant.json");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", () => {
  console.log("mongoDB error");
});

db.once("open", () => {
  console.log("mongoDB connected");
});

//express template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//static files
app.use(express.static("public"));

// app.use(express.urlencoded({ extends: true }));

app.get("/", (req, res) => {
  res.render("index", { restaurants: restaurantData.results });
});

app.get("/restaurants/:restaurant_id", (req, res) => {
  console.log("restaurant_id", req.params.restaurant_id);
  const restaurant = restaurantData.results.find((item) => {
    return item.id.toString() === req.params.restaurant_id;
  });
  res.render("show", { restaurant: restaurant });
});

app.get("/search", (req, res) => {
  const keyword = req.query.keyword.trim().toLocaleLowerCase();
  const restaurantSearch = restaurantData.results.filter((item) => {
    return (
      item.name.toLowerCase().includes(keyword) ||
      item.category.toLowerCase().includes(keyword)
    );
  });
  res.render("index", { restaurants: restaurantSearch, keyword: keyword });
});

app.listen(port, () => {
  console.log(`This is listening on http://localhost:${port}`);
});
