const express = require("express")
const cors = require("cors")
require("dotenv").config()
const {userController} = require("./Routes/user.route")
const {productController} = require("./Routes/product.route")

const {connection} = require("./Config/db")
const app = express()


app.use(cors())
app.use(express.json())



app.get("/" , (req,res)=>{
  res.send("Welcome to home Page")
})

app.use("/user" ,userController)
app.use("/product" , productController)


 app.listen(process.env.PORT , async()=>{
  try{
    await connection
    console.log("connected to DB successfully")
  }
  catch(err){
    console.log("connecting DB error")
    console.log(err)
  }
  console.log(`Listening on port ${process.env.PORT}`)
})
