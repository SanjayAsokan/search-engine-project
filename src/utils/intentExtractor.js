// intentExtractor.js
/**
 * Extract user intent from query tokens
 */
function extractIntent(tokens) {
  if (!tokens) return {};

  return {
    cheap: tokens.includes("sasta") || tokens.includes("cheap"),
    latest: tokens.includes("latest") || tokens.includes("new"),
    storage: tokens.find(t => t.includes("gb")) || null,
    color: tokens.find(t => ["red", "blue", "black", "white"].includes(t)) || null,
    number: tokens.find(t => !isNaN(t)) || null
  };
}

module.exports = extractIntent;