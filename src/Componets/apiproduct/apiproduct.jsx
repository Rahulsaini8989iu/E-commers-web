import React , { useContext, useEffect, useState } from 'react'
// import { useEffect, useState } from 'react'
// import React { useContext , useEffect , useState} from 'react'
import './apiproduct.css'

function Apiproducts() {

const [products , setproducts] = useState([]);
const [isDark, setIsDark] = useState(false);


useEffect(() => {
    fetch("https://run.mocky.io/v3/bfc58352-6fe2-41cb-9f34-1a601b8ef577")
    .then(res => res.json())
    .then(data => setproducts(data.slice(0,4)))
    .catch(err => console.log("Error fetching products:", err));

},[]);

const toggleDarkMode = () => {
    setIsDark(!isDark)
}

  return (
    // <div className={`product-wrapper ${isDark ? 'dark' : ''}`}>
    // <button className="toggle-btn" onClick={toggleDarkMode}>
    //   {isDark ? "🌞 Light Mode" : "🌙 Dark Mode"}
    // </button>


    // </div>


    <div className={`product-wrapper ${isDark ? 'dark' : ''}`}>
    <button className="toggle-btn" onClick={toggleDarkMode}>
      {isDark ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>

    <div className="product-container">
      {products.map(product => (
        <div className="card" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h4>{product.title}</h4>
          <p>${product.price}</p>
          <button className="btn" onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  </div>
  )
}

export default apiproduct