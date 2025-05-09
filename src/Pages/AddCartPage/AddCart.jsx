import React from 'react'
import './AddCart.css'
import { FiArrowRight } from 'react-icons/fi'
import { Trash2 } from 'lucide-react'
const AddCart = () => {
  return (
    <>
      <div className="cart">
        <p className='cart-p'>Home <FiArrowRight /> </p>
        <p className='cart-p'><b>Cart</b></p>
      </div>
      <div className="cart-header">
        <h1 className='cart-header-h'>YOUR CART</h1>
        <div className="header-flex">
          <div className="header-flex-left">
            <div className="flex-left-1">
              <div className="flex-left-img">

              </div>
              <div className="flex-left-about">
                <h3 className='title'>Title</h3>
                <p className='size'>Size</p>
                <p className='color'>Color</p>
                <h2 className='price'>Price</h2>
              </div>
              <div className="flex-left-buttons">
                <p style={{cursor:"pointer"}}><Trash2 color='red' size={24} /></p>
                <div className="buttons-div">
                  <p style={{cursor:"pointer"}}>-</p>
                  <p>1</p>
                  <p style={{cursor:"pointer"}}>+</p>
                </div>
              </div>
            </div>
            <div className="flex-left-2">
              <div className="flex-left-img">

              </div>
              <div className="flex-left-about">
                <h3 className='title'>Title</h3>
                <p className='size'>Size</p>
                <p className='color'>Color</p>
                <h2 className='price'>Price</h2>
              </div>
              <div className="flex-left-buttons">
                <p style={{cursor:"pointer"}}><Trash2 color='red' size={24} /></p>
                <div className="buttons-div">
                  <p style={{cursor:"pointer"}}>-</p>
                  <p>1</p>
                  <p style={{cursor:"pointer"}}>+</p>
                </div>
              </div>
            </div>
            <div className="flex-left-3">
              <div className="flex-left-img">

              </div>
              <div className="flex-left-about">
                <h3 className='title'>Title</h3>
                <p className='size'>Size</p>
                <p className='color'>Color</p>
                <h2 className='price'>Price</h2>
              </div>
              <div className="flex-left-buttons">
                <p style={{cursor:"pointer"}}npm ><Trash2 color='red' size={24} /></p>
                <div className="buttons-div">
                  <p style={{cursor:"pointer"}}>-</p>
                  <p>1</p>
                  <p style={{cursor:"pointer"}}>+</p>
                </div>
              </div>
            </div>
          </div>
          <div className="header-flex-right">

          </div>
        </div>
      </div>
    </>
  )
}

export default AddCart
