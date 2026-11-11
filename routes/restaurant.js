var express = require("express");
const restaurant_controlers = require("../controllers/restaurant");
var router = express.Router();

/* GET home page. */
router.get("/", restaurant_controlers.restaurant_view_all_Page);
module.exports = router;
