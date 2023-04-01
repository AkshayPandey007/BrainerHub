import React from 'react'
import Signup from '../Pages/Signup'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Product from '../Pages/Product'
import List from '../Pages/List'



const Routing = () => {
  return (
   <Routes>
    <Route path='/' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path='/list' element={<List/>}/>
   </Routes>
  )
}

export default Routing