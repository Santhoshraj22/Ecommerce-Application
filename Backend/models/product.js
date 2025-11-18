const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  brand: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  specifications: { type: Array, default: [] },
  price: { type: Number, required: true },
  rating: { type: Number, default: 0 }
});

module.exports = mongoose.model("Product", productSchema);
