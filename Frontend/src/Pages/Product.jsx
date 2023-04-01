import React, { useState } from 'react'
// import UploadNav from '../Components/UploadNav'
import styles from "../CSS/Product.module.css"
import logo from "../assests/logo.png"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import ProductNav from '../Component/ProductNav'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../Redux/action'


const Product = () => {
//   const [imagefile, setFile] = useState("");
//   const [load , setLoad] = useState(false)
//   const [done , setDone] = useState(true)
  const navigate = useNavigate();
  const token = localStorage.getItem("token")
  const loading = useSelector((store)=>store.isProLoad)
  const dispatch = useDispatch();
  const[load,setLoad]=useState(true)


  const [values, setValues] = useState({
    image:"",
    name:"",
    price:"",
    description:"",
    quantity:""
  });

  const toastCss = {
    position: "bottom-center",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };


  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };



// console.log(token)

  const handleSubmit=(e)=>{
    e.preventDefault();

    const { image, name, price,description,quantity} = values;
   

    // console.log("TOKEN",token)
    setLoad(true)
    dispatch(addProduct({ image, name, price,description,quantity ,token}))
            .then((res) => {
                // console.log(res, "page")
                if(res.payload.status==true)
                {
                setLoad(false)
                }
                else if(res.payload.status==false)
                {
                    alert("FIRST LOGIN")
                    navigate("/login")
                }
            })

  }
  return (
    <div>
      <ProductNav/>

      <div className={styles.UploadBox}>


     
      <h2 style={{  display:"flex" , justifyContent:"center"}}>Add Product</h2>


        <form action="" onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" placeholder='Enter Image URL' name="image" required onChange={(e) => handleChange(e)}/>
        <br/>
        <input type="text" placeholder='Enter Product Name' name="name" required onChange={(e) => handleChange(e)}/>
        <br />
        <input type="number" placeholder='Enter Price' name="price" required onChange={(e) => handleChange(e)}/>
        <br />
        <input type="text" placeholder='Enter Description' name="description" required onChange={(e) => handleChange(e)}/>
        <br />
        <input type="number" placeholder='Enter Quantity' name="quantity" required onChange={(e) => handleChange(e)}/>


        {/* <p>{isProLoad?`${load?"...Loading":""}`:`DONE`}</p> */}
        <p style={{textAlign:"center"}}>{load?`${loading?"...Loading":""}`:"DONE"}</p>

        <button type="submit" > SUBMIT </button>
       
        </form>
      </div>
     
    </div>
  )
}

export default Product