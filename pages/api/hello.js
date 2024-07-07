import Product from "@/models/productSchema";
import mongoose from "mongoose";
const fs = require('fs')
export default async function handler(req, res) {
    await mongoose.connect(process.env.MONGO_URI)
      let products = await Product.find({})
      let filedata = `data = [${products}]\n export default data;`
      fs.writeFile('./pages/data/product.js', filedata)
      res.status(200).json(products);
    }
    

