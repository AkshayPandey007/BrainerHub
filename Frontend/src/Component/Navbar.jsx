import React from 'react'
import styles from "../CSS/Navbar.module.css"
import logo from "../assests/logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={styles.NavBox}>
        

        <div className={styles.NavLeftBox}>
            <div className={styles.LogoBox}>
        <img src={logo} alt="" style={{height:"100%" , width:"100%" , objectFit:"contain"}}/>
        </div>
        </div>

        <div className={styles.NavRightBox}>
        
      <Link to="/" className={styles.NavRLU}> <div>REGISTER</div> </Link> 
      <Link to="/login" className={styles.NavRLU}> <div>LOGIN</div> </Link> 
       <Link to="/product" className={styles.NavRLU}><div>PRODUCTS</div> </Link> 


        </div>


    </div>
  )
}

export default Navbar