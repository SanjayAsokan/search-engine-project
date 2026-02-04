const catalogService = require("./catalog.service");
const normalizeQuery = require("../utils/normalizeQuery");
const extractIntent = require("../utils/intentExtractor");
const { rankProducts } = require("./ranking.service");

function searchProducts(query) {
  // 1. Normalize
  const tokens = normalizeQuery(query);

  // 2. Extract intent
  const intent = extractIntent(tokens);

  // 3. Get all products
  const products = catalogService.getAllProducts();

  // 4. Rank products
  const ranked = rankProducts(products, tokens, intent);

  return ranked;
}

module.exports = { searchProducts };