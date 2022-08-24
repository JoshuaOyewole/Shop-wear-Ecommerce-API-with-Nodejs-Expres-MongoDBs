const mongoose = require("mongoose");
/* import {nanoid} from "nanoid"; */

const ProductSchema = new mongoose.Schema(
  {
      title: { type: String, required: true, unique: true },
      desc: { type: String, required: true },
      img: { type: String, required: true },
      categories: { type: Array },
      size: { type: Array },
      color: { type: Array },
      price: { type: Number, required: true },
      inStock: { type: Boolean, default: true },
    },
  { timestamps: true }
);
/*const ProductSchema = new mongoose.Schema(
  {
    header: { type: String, required: true},
    gender: { type: String, required: true },

    product:[{
      id: {
        type: String,
        /* default: () => nanoid(),
      },
      title: { type: String, required: true, unique: true },
      desc: { type: String, required: true },
      img: { type: String, required: true },
      categories: { type: Array },
      size: { type: Array },
      color: { type: Array },
      price: { type: Number, required: true },
      inStock: { type: Boolean, default: true },
    }], 
  },
  { timestamps: true }
); */

module.exports = mongoose.model("Product", ProductSchema);
