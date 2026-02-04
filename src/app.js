const express = require("express");

const app = express();

const productRoutes = require("./routes/product.routes");
const searchRoutes = require("./routes/search.routes");


// Middleware to parse JSON request bodies
app.use(express.json());

// Routes
app.use("/api/v1", productRoutes);
app.use("/api/v1", searchRoutes);

// Health check API
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    service: "Search Microservice"
  });
});

module.exports = app;