const searchService = require("../services/search.service");

function search(req, res) {
  const query = req.query.query;
  if (!query) return res.status(400).json({ error: "Query is required" });

  const results = searchService.searchProducts(query);

  res.status(200).json({ data: results });
}

module.exports = { search };