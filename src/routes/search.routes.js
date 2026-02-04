const express = require("express");
const router = express.Router();

const searchController = require("../controllers/search.controller");

router.get("/search/product", searchController.search);

module.exports = router;