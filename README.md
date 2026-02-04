# E-Commerce Search Microservice

## Project Overview

This project is a **Search Engine microservice** for an e-commerce platform focused on electronics (iPhones, Samsung, OnePlus, Redmi, etc.) targeting Tier-2 and Tier-3 cities in India.  

The service allows:
- Storing products and metadata
- Performing **ranked search** based on user queries
- Handling various search intents like affordability (`Sasta`), latest models, color, storage, and spelling mistakes  

The microservice uses **Node.js + Express.js** and an **in-memory catalog** to store and rank products.

---

## Features

1. **Add Product**  
   - Endpoint: `POST /api/v1/product`  
   - Stores a product in the in-memory catalog with basic attributes like title, description, price, rating, stock, etc.  

2. **Update Product Metadata**  
   - Endpoint: `PUT /api/v1/product/meta-data`  
   - Add product details like RAM, storage, color, and model  

3. **Search Products**  
   - Endpoint: `GET /api/v1/search/product?query=<user_query>`  
   - Returns ranked products based on:
     - Title and description match
     - Query intent (cheap/latest/color/storage)
     - Rating
     - Stock availability  

4. **Seed Data**  
   - On server start, 1000+ realistic products are automatically generated for meaningful search results  

---

## Search Query Examples

| Query | Description |
|-------|-------------|
| "Sasta iPhone" | User wants affordable iPhones |
| "iPhone 16 red color" | User wants iPhone 16 in red color |
| "Ifone 16" | Handles spelling mistake → matches iPhone 16 |
| "iPhone cover strong" | User wants iPhone cover with good quality |

---

## Ranking Algorithm

Products are scored based on multiple factors:

| Factor                  | Weight |
|-------------------------|--------|
| Title match             | 40     |
| Description match       | 20     |
| Intent match            | 20     |
| Rating                  | 10     |
| Stock availability      | 10     |

- **Intent** includes affordability, latest models, color, storage, etc.  
- **Score is computed dynamically** and products are sorted in descending order for search results  

---

## Tech Stack

- **Backend:** Node.js + Express.js  
- **In-Memory Storage:** JavaScript Map  
- **Testing:** Postman / Browser  

---

