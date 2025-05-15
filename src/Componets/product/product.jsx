import React, { useContext, useEffect, useState } from 'react';
import './Product.css';
// import { CartContext } from '../context/Cartcontext';


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isDark, setIsDark] = useState(false);
//   const {addToCart} = useContext(CartContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.slice(4, 8)))
      .catch(err => console.log("Error fetching products:", err));
  }, []);

//   const handleAddToCart = (data) => {
//     addToCart(data)
//   }



  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
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
  );
};

export default ProductList;
