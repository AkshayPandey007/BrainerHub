import React, { useState } from 'react'
import Navbar from '../Component/Navbar'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assests/logo.png"
import { Link, useNavigate } from 'react-router-dom';
import styles from "../CSS/Login.module.css"
import axios from "axios"
import { UserLogin } from '../Redux/action';
import { useDispatch } from 'react-redux';
import Product from './Product';


const Login = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({username: "", password: ""});
    const dispatch = useDispatch();
    const token = localStorage.getItem("token")
    

    


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


    const handleSubmit =async(e)=>{
      e.preventDefault();
      if(handleValidation()==true)
      {
        const {  username, password } = values;
        dispatch(UserLogin({  username, password }))
        .then((res) => {
          if (res.payload.status === false) {
            // console.log(res)
            toast.error(res.payload.msg, toastCss);
          }
          else{
             console.log(res)
               localStorage.clear()
               localStorage.setItem("token",res.payload.token)
             localStorage.setItem("name",res.payload.user.username )
             localStorage.setItem("email",res.payload.user.email )
             navigate("/product")
          }
        })
      
    }
  }


    
    const handleValidation = () => {
        const { password, username } = values;
         if (username == "") {
          toast.error("Username is required",toastCss);
          return false;
        } 
        else if (password ==  "") {
          toast.error("Password is required", toastCss);
          return false;
        } 
    
        return true;
      };
  return (
    <>
   {token?<Product/>:
    <div>
        <Navbar/>

        <div className={styles.loginBox}>


        <div>
         <img src={logo} alt="" className={styles.LoginLogo}/>
        </div>
     
      <form onSubmit={(e)=>handleSubmit(e)}>



<input type="text" placeholder='Enter Your Name'  name="username" onChange={(e) => handleChange(e)}/>

<br/>

<input type="password" placeholder='Enter Password'  name="password" onChange={(e) => handleChange(e)}/>



<br/>

<button type='Submit'>LOGIN</button>


</form>


          <span className={styles.Alredy}>
            Don't have an account ? <Link to="/">Create One.</Link>
          </span>
          
      </div>
      <ToastContainer/>
    </div>
      
  }
    </>
  )
}

export default Login