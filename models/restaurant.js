const mongoose = require("mongoose");
const restaurantSchema = mongoose.Schema({
  name: String,
  capacity: Number,
  cuisine: String,
  city: String,
});
module.exports = mongoose.model("Restaurant", restaurantSchema);
