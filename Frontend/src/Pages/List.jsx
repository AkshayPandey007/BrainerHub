import React, { useEffect, useState } from 'react'
import ProductNav from '../Component/ProductNav'
import Styles from "../CSS/List.module.css"
import { getProductData } from '../Redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import Login from './Login';

const List = () => {
    const dispatch = useDispatch();
    const productData = useSelector((store)=>store.product)
    const total = useSelector((store)=>store.total)
    const[search,setSearch] = useState("")
    const[page,setPage] = useState(1)
    const[limit,setLimit] = useState(5)
    const[sort,setSort] = useState("")
    const[capture,setCap] = useState(false)
    const token = localStorage.getItem("token")


    useEffect(()=>{
      dispatch(getProductData({search,page,limit,sort}))
      setCap(false)
    },[capture,page,sort,limit])


    const handleSub=()=>{
      setCap(true)
    }


const handlePre=()=>{
    setPage((page)=>page-1)
    // alert("PREV")
}


const handleNex=()=>{
    setPage((page)=>page+1)
    // alert("NEXT")
}

console.log(productData)
  return (
    <>
    {token?
    <div>
        <ProductNav/>

        <div className={Styles.FPSBox}>

          


           <div  className={Styles.inputBox}>
            <input type="text" name="" id="" className={Styles.searchInput} placeholder='Search By Name' onChange={(e)=>setSearch(e.target.value)}/> <span onClick={handleSub} style={{cursor:"pointer"}}><HiMagnifyingGlass size={28}/></span>
           </div>


           <div className={Styles.selectBox}>
            <select name=""  style={{height:"30px" ,width:"100%"}} onChange={(e)=>setSort(e.target.value)}>
                <option value={-1}>Price High To Low</option>
                <option value={1}>Price Low To High</option>
            </select>
           </div>

        </div>




        <div className={Styles.MapBox}>
            {productData.map((el)=>(
                <div className={Styles.mapEachBox} key={el._id}>
                    <div className={Styles.imgBox}>
                    <img src={el.image} alt="" style={{width:"100%" , height:"250px"}}/>
                    <h2 style={{color:"red"}}> {el.name}</h2>
                   
                    <p style={{marginTop:"-15" , fontSize:"18px"}}> <span style={{color:"blue"}}> Price : ₹ </span> {el.price}</p>
                    <p style={{marginTop:"-15px" , fontSize:"18px"}}> <span style={{color:"blue"}}>Qty : </span>{el.quantity}</p>
                    

                        <p style={{marginTop:"-15px" , fontSize:"18px"}}> <span style={{color:"blue"}}>Detail : </span> {el.description}</p>
                    </div>
                </div>
            ))}
        </div>

        <div className={Styles.BtnBox}>
            <button className={Styles.ListPreBtn} onClick={handlePre} disabled={page==1?true:false}>Prev</button>
            <button className={Styles.ListPreBtn} disabled={total/limit==page || productData.length<5?true:false} onClick={handleNex}>Next</button>
           </div>
    </div>
    :<Login/>}
    </>
  )
}

export default List