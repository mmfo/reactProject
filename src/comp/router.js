import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home'
import Login from './login'
import SignUp from './signUp'
import AllProduct from './allProduct'
import ProductDetail from './productDetail'
import ProductCategory from'./productCategory'
import AddProduct from'./addProduct'
import NavBar from './nav'
import PrivateArea from './privateArea'
import Basket from './basket'
import Pay from './pay'
import Finish from './finish'

export default function Router() {
    return (
        <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
            <Route path='/all_product' element={<AllProduct/>}></Route>
            <Route path='/product_detail/:productName' element={<ProductDetail/>}></Route>
            <Route path='/product_category/:categoryId' element={<ProductCategory/>}></Route>
            <Route path='/add_product' element={<AddProduct/>}></Route>
            <Route path='/private_area' element={<PrivateArea/>}></Route>
            <Route path='/basket' element={<Basket/>}></Route>
            <Route path='/pay' element={<Pay/>}></Route>
            <Route path='/finish/:orderId' element={<Finish/>}></Route>
            
        </Routes>
        </BrowserRouter>
    )
}