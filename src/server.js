const app = require("./app");
const seedProducts = require("./data/seedProducts");

const PORT = 3000;

// Seed 1000 products on start
seedProducts(1000);

app.listen(PORT, () => {
  console.log(`Search service running on port ${PORT}`);
});