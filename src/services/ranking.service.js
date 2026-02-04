function scoreProduct(product, tokens, intent) {
  let score = 0;

  // Title match
  const title = product.title.toLowerCase();
  tokens.forEach(token => {
    if (title.includes(token)) score += 8; // weight 40 distributed over 5 tokens
  });

  // Description match
  const desc = product.description.toLowerCase();
  tokens.forEach(token => {
    if (desc.includes(token)) score += 4; // weight 20
  });

  // Intent match
  if (intent.cheap && product.price < product.mrp) score += 10;
  if (intent.latest && product.metadata.model?.toLowerCase().includes("pro")) score += 10;
  if (intent.color && product.metadata.color?.toLowerCase() === intent.color) score += 5;
  if (intent.storage && product.metadata.storage === intent.storage) score += 5;

  // Rating
  score += (product.rating / 5) * 10;

  // Stock
  if (product.stock > 0) score += 10;

  return score;
}

/**
 * Sort products by score
 */
function rankProducts(products, tokens, intent) {
  return products
    .map(p => ({ ...p, score: scoreProduct(p, tokens, intent) }))
    .sort((a, b) => b.score - a.score);
}

module.exports = { rankProducts };