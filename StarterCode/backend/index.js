const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Implement CORS configuration
app.use(cors());

// Products array: Fill it with sample prudcts/data
let products = [
  {
    id: 1,
    name: "Product 1",
    description: "description 1",
    price: 100,
    imageUrl: "",
  },
  {
    id: 2,
    name: "Product 2",
    description: "description 2",
    price: 200,
    imageUrl: "",
  },
  {
    id: 3,
    name: "Product 3",
    description: "description 3",
    price: 300,
    imageUrl: "",
  },
  {
    id: 4,
    name: "Product 4",
    description: "description 4",
    price: 150,
    imageUrl: "",
  },
  {
    id: 5,
    name: "Product 5",
    description: "description 5",
    price: 500,
    imageUrl: "",
  },
  {
    id: 6,
    name: "Product 6",
    description: "description 6",
    price: 50,
    imageUrl: "",
  },
];

// Generate random image URL for each product
products = products.map((product) => ({
  ...product,
  imageUrl: `https://picsum.photos/200/200?random=${product.id}`,
}));

// Get API for retrieving products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Delete API for deleting a product by ID
app.delete("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const productIndex = products.findIndex((p) => p.id === parseInt(id));

  if (productIndex !== -1) {
    products.splice(productIndex, 1);
    res.status(200).json({ message: "Product deleted successfully" });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
