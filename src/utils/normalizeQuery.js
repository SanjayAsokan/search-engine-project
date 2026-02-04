// normalizeQuery.js
/**
 * Normalize user query
 * - Convert to lowercase
 * - Remove special characters
 * - Split into array of words
 */

function normalizeQuery(query) {
  if (!query) return [];

  return query
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "") // remove symbols
    .split(" ")
    .filter(Boolean);
}

module.exports = normalizeQuery;