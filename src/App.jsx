import React from 'react'
import Header from './Componets/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contect from './Pages/Contect/Contect';
import Home from './Pages/HomePage/Home';
import Navbar from './Componets/Navbar/Navbar';
import Footer from './Componets/Footer/Footer';
import ShopPage from './Pages/ShopPage/ShopPage'
import OnSalePage from './Pages/OnSalePage/OnSale'
import NewArrivalPage from './Pages/NewArrivalPage/NewArrival'
import BrandPage from './Pages/BrandPage/Brand'
import AddCartPage from './Pages/AddCartPage/AddCart'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contect' element={<Contect />} />
          <Route path='/shop' element={<ShopPage/>} />
          <Route path='/sale' element={<OnSalePage />} />
          <Route path='/new' element={<NewArrivalPage />} />
          <Route path='/brands' element={<BrandPage />} />
          <Route path='/cart' element={<AddCartPage />} />


        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

