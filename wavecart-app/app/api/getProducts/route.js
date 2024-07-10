import Product from "/app/api/models/productSchema";
import mongoose from "mongoose";
export async function POST(req) {
  let param = await req.json()
  let key = param.key
  let value = param.value

    await mongoose.connect("mongodb+srv://khanarbajpathan057:atikkhan59986@wavecart.lrjxhkh.mongodb.net/wavecart")
      let products = await Product.find({[key]:value})
      return new Response(JSON.stringify(products));
    
}
  