const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
   image:{type:String , required:true},
   name:{type:String , required:true},
   price:{type:Number , required:true},
   description:{type:String , required:true},
   quantity:{type:Number , required:true}
},
{timestamps:true}
)

const ProductModel = mongoose.model("Product" , productSchema)
module.exports={
    ProductModel
}