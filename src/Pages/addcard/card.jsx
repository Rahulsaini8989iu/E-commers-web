// import React, { useContext } from 'react'
// import { CartContext } from '../../Componets/context/CartContext';
// import { useNavigate } from 'react-router-dom';


// function cart() {
//   const { cartItems, addToCart, RemoveFromCart, increaseQuantity, decreaseQuantity, totalPrice, totalQuantity } = useContext(CartContext);
//   return (
//     <div>

//       <div style={{ padding: "20px" }}>
//         <h2>cart </h2>

//         {cartItems.lenth === 0 ? (
//           <p>your cart is empty</p>
//         ) : (
//           <> 
//             {cartItems.map((item) => (

//               <div className='carddata-1' key={item.id} >
//                 <img src={item.image} alt="" />
//                 <h4>{item.title}</h4>
//                 <p>price: ${item.price}</p>
//                 <p>Quantity:{item.quantity}</p>
//                 <button id='carddata-1-b1' onClick={() => decreaseQuantity(item.id)}>-</button>
//                 <button id='carddata-1-b1' onClick={() => increaseQuantity(item.id)}>+</button>
//                 <button onClick={() => RemoveFromCart(item.id)}>Remove</button>
//               </div>
//             ))}
//           </>
//         )}


//       </div>
//     </div>
//   )
// }

// export default cart

// import { useContext } from "react"
import React, {useContext } from 'react'
import { CartContext } from '../../Componets/context/CartContext'
import { useNavigate } from 'react-router-dom'

function cart() {
  const { cartItems, addToCart, RemoveFromCart, increaseQuantity, decreaseQuantity, totalPrice, totalQuantity } = useContext(CartContext);
  return (
    // <>

    <div style={{ padding: "20px" }}>

      <h1>cart</h1>

{cartItems.lenth === 0 ? (
  <p>your cart is empty</p>
) : (
  <>

  {cartItems.map((item) => (
    <div className='carddata-1' kye={item.id}>
      <img src={item.image} alt="" />
      <h4>{item.title}</h4>
      <p>Price: ${item.Quantity}</p>
      <p>Quantity:{item.quantity}</p>
      <button id='carddata-1-b1' onClick={() => decreaseQuantity (item.id)}>-</button>
      <button id='carddata-1-b1' onClick={() => increaseQuantity (item.id)}>+</button>
      <button onClick={() => RemoveFromCart(item.id)}>remove</button>
    </div>
  ))}






  </>
)}

    </div>
    // </>
  )
}

export default cart