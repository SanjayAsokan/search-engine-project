const catalogService = require("../services/catalog.service");


// Create a new product

function createProduct(req, res) {
  try {
    const product = req.body;

    if (!product.title || !product.price) {
      return res.status(400).json({
        error: "Title and price are required"
      });
    }

    const productId = catalogService.addProduct(product);

    return res.status(201).json({ productId });
  } catch (error) {
    return res.status(500).json({
      error: "Failed to create product"
    });
  }
}


// Update product metadata

function updateProductMetadata(req, res) {
  const { productId, Metadata } = req.body;

  if (!productId || !Metadata) {
    return res.status(400).json({
      error: "productId and Metadata are required"
    });
  }

  const updatedProduct =
    catalogService.updateProductMetadata(productId, Metadata);

  if (!updatedProduct) {
    return res.status(404).json({
      error: "Product not found"
    });
  }

  return res.status(200).json(updatedProduct);
}

module.exports = { createProduct, updateProductMetadata };