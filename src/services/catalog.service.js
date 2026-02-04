// Auto-increment product ID
let productIdCounter = 1;

// In-memory store
const productStore = new Map();


//  Add a product to catalog
 
function addProduct(product) {
  const productId = productIdCounter++;

  const newProduct = {
    productId,
    ...product,
    metadata: {}
  };

  productStore.set(productId, newProduct);
  return productId;
}

// Update metadata of a product

function updateProductMetadata(productId, metadata) {
  const product = productStore.get(productId);

  if (!product) {
    return null;
  }

  product.metadata = {
    ...product.metadata,
    ...metadata
  };

  return product;
}

// Get all products
function getAllProducts() {
  return Array.from(productStore.values());
}


//Get product by ID

function getProductById(productId) {
  return productStore.get(productId);
}

module.exports = {addProduct, updateProductMetadata, getAllProducts, getProductById };