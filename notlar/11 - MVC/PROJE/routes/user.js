const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products");

const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const router = express.Router();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

router.get("/", productsController.getProduct);

module.exports = router;