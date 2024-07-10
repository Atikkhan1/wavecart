import Product from "/app/api/models/productSchema";
import mongoose from "mongoose";
export async function GET() {

    await mongoose.connect("mongodb+srv://khanarbajpathan057:atikkhan59986@wavecart.lrjxhkh.mongodb.net/wavecart")

    
      let products = await Product.find({})
      return new Response(JSON.stringify(products));
    
}
  