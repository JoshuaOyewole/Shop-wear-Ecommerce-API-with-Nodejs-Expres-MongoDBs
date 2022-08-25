const mongoose = require("mongoose");

const ProductSchema2 = new mongoose.Schema(
  {
    header: { type: String, required: true},
    gender: { type: String, required: true },
    section: { type: String, required: true },
    products:[{
      pid: {type: String, required: true, unique: true},
      title: { type: String, required: true, unique: true },
      desc: { type: String, required: true },
      img: { type: String, required: true },
      categories: { type: Array, required: true },
      size: { type: Array, required: true },
      colors: { type: Array, required: true },
      price: { type: Number, required: true },
      inStock: { type: Boolean, default: true },
    }], 
  },
  { timestamps: true }
); 

module.exports = mongoose.model("Product2", ProductSchema2);
