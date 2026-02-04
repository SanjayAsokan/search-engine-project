const catalogService = require("../services/catalog.service");

// Sample data arrays
const brands = ["iPhone", "Samsung", "OnePlus", "Redmi"];
const models = ["Mini", "Standard", "Pro", "Max"];
const colors = ["black", "white", "red", "blue", "green"];
const storages = ["64GB", "128GB", "256GB", "512GB"];
const rams = ["4GB", "6GB", "8GB", "12GB"];

// Function to generate random number in range
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate products
function seedProducts(count = 1000) {
  for (let i = 0; i < count; i++) {
    const brand = brands[random(0, brands.length - 1)];
    const model = models[random(0, models.length - 1)];
    const color = colors[random(0, colors.length - 1)];
    const storage = storages[random(0, storages.length - 1)];
    const ram = rams[random(0, rams.length - 1)];
    const price = random(20000, 150000);
    const mrp = price + random(1000, 5000);
    const rating = (Math.random() * 2 + 3).toFixed(1); // 3.0 - 5.0
    const stock = random(0, 100);

    // Add product to catalog
    const productId = catalogService.addProduct({
      title: `${brand} ${model}`,
      description: `${brand} ${model} with ${ram} RAM, ${storage} storage, color ${color}`,
      rating: parseFloat(rating),
      stock,
      price,
      mrp,
      currency: "INR",
      unitsSold: random(100, 10000),
    });

    // Add metadata
    catalogService.updateProductMetadata(productId, { brand, model, color, storage, ram, });
  }

  console.log(`Seeded ${count} products`);
}

module.exports = seedProducts;