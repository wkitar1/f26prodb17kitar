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
// Handle a show one view with id specified by query
exports.restaurant_view_one_Page = async function (req, res) {
  console.log("single view for id " + req.query.id);
  try {
    result = await Restaurant.findById(req.query.id);
    res.render("restaurantdetail", {
      title: "Rrestaurant Detail",
      toShow: result,
    });
  } catch (err) {
    res.status(500);
    res.send(`{'error': '${err}'}`);
  }
};

// for a specific restaurant.
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
exports.restaurant_delete = async function (req, res) {
  console.log("delete " + req.params.id);
  try {
    result = await Restaurant.findByIdAndDelete(req.params.id);
    console.log("Removed " + result);
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": Error deleting ${err}}`);
  }
};
// Handle Restaurant update on PUT.
exports.restaurant_update_put = async function (req, res) {
  console.log(
    `update on id ${req.params.id} with body ${JSON.stringify(req.body)}`,
  );
  try {
    let toUpdate = await Restaurant.findById(req.params.id);
    if (req.body.name) toUpdate.name = req.body.name;
    if (req.body.capacity) toUpdate.capacity = req.body.capacity;
    if (req.body.cuisine) toUpdate.cuisine = req.body.cuisine;
    if (req.body.city) toUpdate.city = req.body.city;
    let result = await toUpdate.save();
    console.log("Success " + result);
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": "${err}: Update for id ${req.params.id} failed"}`);
  }
};

// Handle building the view for creating a restaurant.
// No body, no in path parameter, no query.
// Does not need to be async
exports.restaurant_create_Page = function (req, res) {
  console.log("create view");
  try {
    res.render("restaurantcreate", { title: "Restaurant Create" });
  } catch (err) {
    res.status(500);
    res.send(`{"error": "${err}"}`);
  }
};

// Handle building the view for updating a restaurant.
// query provides the id
exports.restaurant_update_Page = async function (req, res) {
  console.log("update view for item " + req.query.id);
  try {
    let result = await Restaurant.findById(req.query.id);
    res.render("restaurantupdate", {
      title: "Restaurant Update",
      toShow: result,
    });
  } catch (err) {
    res.status(500);
    res.send(`{'error': '${err}'}`);
  }
};

// Handle a delete one view with id from query
exports.restaurant_delete_Page = async function (req, res) {
  console.log("Delete view for id " + req.query.id);
  try {
    result = await Restaurant.findById(req.query.id);
    res.render("restaurantdelete", {
      title: "Restaurant Delete",
      toShow: result,
    });
  } catch (err) {
    res.status(500);
    res.send(`{"error": "${err}"}`);
  }
};
