import Product from "@/models/productSchema";
import mongoose from "mongoose";
const fs = require('fs')
export default async function handler(req, res) {
  let key = req.query.key
  let value = req.query.value
    await mongoose.connect(process.env.MONGO_URI)

    if (key!=undefined) {
      let products = await Product.find({[key]:[value]})
      res.status(200).json(products);
    }else{
      let products = await Product.find({})
      res.status(200).json(products);
    }
    
  }
  