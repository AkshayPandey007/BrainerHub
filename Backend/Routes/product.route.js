const {Router} = require("express")
require("dotenv").config()
const {ProductModel} = require("../Models/product.model")
const productController = Router()
const jwt = require("jsonwebtoken")



   productController.get("/data" , async(req,res)=>{
    try{
        // const field=req.query.sort || "_id";
        const order=req.query.order ;
        const search =req.query.search || "";
        const page = parseInt(req.query.page) -1 || 0 
        const limit = parseInt(req.query.limit) || 5 
        const data= await ProductModel.find({name:{$regex:search, $options:"i"}}).sort({ price : order  }).skip(page * limit ).limit(limit)

        const total=await ProductModel.countDocuments({name: { $regex: search, $options: "i" }})

        const response = {
			error: false,
			total,
			page: page + 1,
			limit,
			data,
            
		};
        console.log(order,search,page,limit)
        return res.send({msg:response})
    }
    catch(err){
       return res.send({"err":err})
    }
   })


    productController.post("/new", async (req, res) => {
    
        // const {payload} = req.body
      const token = req.headers.authorization.split(" ")[1]
    jwt.verify(token,'secret',async function(err){
      if(err)
      {
        res.json({msg:"Please Login" , status:false})
      }
      else{
        const NewProduct = new ProductModel(req.body)
        await NewProduct.save()
        res.json({msg:"Successfully Uploades" , status:true})
      }
    })
  });


  
module.exports={
    productController
}