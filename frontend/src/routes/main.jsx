import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Cart from '../component/cart';
import Header from '../component/navbar';
import { Product } from '../component/product';


export const MainRoutes = () => {
  return (
      <>
        <Header/>
        <Routes>
           <Route path="/" element={<Product/>} />
           <Route path="/cart/:id" element={<Cart/>}/>

        </Routes>
  </>
  )
}