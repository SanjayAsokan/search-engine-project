const express = require("express");
const router = express.Router();

const productController = require("../controllers/product.controller");

router.post("/product", productController.createProduct);
router.put("/product/meta-data", productController.updateProductMetadata);

module.exports = router;