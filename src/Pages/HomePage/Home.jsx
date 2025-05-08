import React from 'react'
// import Apiproducts from './apiproduct/apiproduct.jsx'
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
     
     {/* <Apiproducts/> */}
      {/* ///////////  */}


      {/* ProductList card1 */}
      <h1 className='pro'>top selling</h1>
    
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


      {/* new page3 */}

      <div className="ne4">
        <h1>OUR HAPPY CUSTOMERS</h1>
      </div>
      <div className="sa">
        <div className="sa1">
          <img src="Frame 10 (1).png" alt="" />
          <div className="sa11">
            <h4>Sarah m.</h4>
            <img src="Frame (2).png" alt="" />
          </div>
          <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
        </div>

        <div className="sa1" id='h1'>
          <img src="Frame 10 (1).png" alt="" />
          <div className="sa11">
            <h4>Sarah m.</h4>
            <img src="Frame (2).png" alt="" />
          </div>
          <p>"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
        </div>

        <div className="sa1" id='h2'>
          <img src="Frame 10 (1).png" alt="" />
          <div className="sa11">
            <h4>Sarah m.</h4>
            <img src="Frame (2).png" alt="" />
          </div>
          <p>"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
        </div>
      </div>












    </>
  )
}

export default Home
