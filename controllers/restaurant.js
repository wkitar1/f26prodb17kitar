var Restaurant = require("../models/restaurant");
// List of all Restaurants
exports.restaurant_list = async function (req, res) {
  try {
    theRestaurants = await Restaurant.find();
    res.send(theRestaurants);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};
// VIEWS
// Handle a show all view
exports.restaurant_view_all_Page = async function (req, res) {
  try {
    theRestaurants = await Restaurant.find();
    res.render("restaurant", {
      title: "Restaurant Search Results",
      results: theRestaurants,
    });
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// for a specific Costume.
exports.restaurant_detail = async function (req, res) {
  console.log("detail" + req.params.id);
  try {
    result = await Restaurant.findById(req.params.id);
    res.send(result);
  } catch (error) {
    res.status(500);
    res.send(`{"error": document for id ${req.params.id} not found`);
  }
};
// Handle Restaurant create on POST.
exports.restaurant_create_post = async function (req, res) {
  console.log(req.body);
  let document = new Restaurant();
  document.name = req.body.name;
  document.capacity = req.body.capacity;
  document.cuisine = req.body.cuisine;
  document.city = req.body.city;
  try {
    let result = await document.save();
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// Handle Restaurant delete from on DELETE.
exports.restaurant_delete = function (req, res) {
  res.send("NOT IMPLEMENTED: Restaurant delete DELETE " + req.params.id);
};
// Handle Restaurant update form on PUT.
exports.restaurant_update_put = function (req, res) {
  res.send("NOT IMPLEMENTED: Restaurant update PUT" + req.params.id);
};
