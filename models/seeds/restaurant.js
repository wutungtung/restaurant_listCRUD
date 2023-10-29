const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const restaurantSchema = new Schema({
  name: { type: String, requird: true },
  category: { type: String, required: true },
  Image: { type: String, required: true },
  location: { type: String, required: true },
  phone: { type: String, required: true },
  google_map: { type: String, required: true },
  rating: { type: Number, required: true },
  description: { type: String, requird: true },
  done: { type: Boolean },
});

module.exports = mongoose.model("Restaurants", restaurantSchema);
