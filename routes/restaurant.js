var express = require("express");
const restaurant_controlers = require("../controllers/restaurant");
var router = express.Router();

/* GET home page. */
router.get("/", restaurant_controlers.restaurant_view_all_Page);
module.exports = router;

/* GET detail restaurant page */
router.get("/detail", restaurant_controlers.restaurant_view_one_Page);

/* GET create restaurant page */
router.get("/create", restaurant_controlers.restaurant_create_Page);
/* GET create update page */
router.get("/update", restaurant_controlers.restaurant_update_Page);
/* GET delete restaurant page */
router.get("/delete", restaurant_controlers.restaurant_delete_Page);
