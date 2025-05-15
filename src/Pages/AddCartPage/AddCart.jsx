
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
                <p style={{cursor:"pointer"}}><Trash2 color='red' size={24} /></p>
                <div className="buttons-div">
                  <p style={{cursor:"pointer"}}>-</p>
                  <p>1</p>
                  <p style={{cursor:"pointer"}}>+</p>
                </div>
              </div>
            </div>
          </div>
          <div className="header-flex-right">
                <h2 className="right-heading">Order Summary</h2>
                <div className="right-wali-div">
                  <div className="right-wali-div1">
                    <p className='right-wali-div-p'>Subtotal</p>
                    <h4 className='right-wali-div-h'>$565</h4>
                  </div>
                  <div className="right-wali-div1">
                    <p className='right-wali-div-p'>Discount (-20%)</p>
                    <h4 className='right-wali-div-h' style={{ color:"red"}}>-$113</h4>
                  </div>
                  <div className="right-wali-div1" style={{ borderBottom:"1px solid #0000001A"}}>
                    <p className='right-wali-div-p'>Delivery Fee</p>
                    <h4 className='right-wali-div-h' >$15</h4>
                  </div>
                  <div className="right-wali-div1" >
                    <p className='right-wali-div-p'>Total</p>
                    <h4 className='right-wali-div-h'>$467</h4>
                  </div>
                </div>
                <div className="cart-apply">
                  <input type="text" placeholder='Add promo code' className='cart-apply-promo'/>
                  <button className='cart-apply-butto'>Apply</button>
                </div>
                <div className="checkout-wali">
                  <button className="checkout-btn">Go to Checkout <FiArrowRight style={{marginLeft: "20px"}}/> </button>
                </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddCart

