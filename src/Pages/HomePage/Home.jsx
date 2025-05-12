import React from 'react'
import ProductList from '../../Componets/product/product'
import './Home.css'

const Home = () => {
  return (
    <>


      <div className="fi">
        <div className="letter">
          <h1>FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE </h1>
          <p>Browse through our diverse range of meticulously crafted garments, <br /> to bring out your individuality and cater to your sense of style.</p>


          <li><button>Shop Now</button></li>


          <div className="in">
            <div className="in1">
              <h1>200+</h1>
              <p>International Brands</p>
            </div>
            <div className="in1">
              <h1>2,000+</h1>
              <p>High-Quality Products</p>
            </div>
            <div className="in1">
              <h1>30,000+</h1>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="img2">
          <img src="Rectangle 2 (1).png" alt="" />
        </div>
      </div>


      {/* new page */}

      <div className="img3">
        <img src="Vector (1).png" alt="" />
        <img src="zara-logo-1 1.png" alt="" />
        <img src="gucci-logo-1 1.png" alt="" />
        <img src="prada-logo-1 1.png" alt="" />
        <img src="Group.png" alt="" />
      </div>

      {/* /////////////////// */}

      {/* ProductList card */}
      <h1 className='pro'>NEW ARRIVALS</h1>
      
      <ProductList/>
   
      {/* ///////////  */}


      {/* ProductList card1 */}
      <h1 className='pro'>top selling</h1>

      <ProductList/>
      {/* ///////////// */}


      {/* new page 2 */}

      <div className="ne3">
        <h1>BROWSE BY dress STYLE</h1>
      </div>
      <div className="br">
        <div className="bro">
          <div className="img5">
            <img src="Frame 61.png" alt="" />
            <img src="Frame 62.png" alt="" />
            <img src="Frame 64.png" alt="" />
            <img src="Frame 63.png" alt="" />
          </div>
          <div className="img6">
            <img src="Frame 105.png" alt="" />
            <img src="Frame 106.png" alt="" />
            <img src="Frame 107.png" alt="" />
            <img src="Frame 108.png" alt="" />
          </div>
        </div>
      </div>

      {/* //////////////// */}

    </>
  )
}

export default Home