import React from 'react'
import './ShopPage.css'
import { FiArrowRight, FiArrowDown } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Plus, Minus, ArrowBigRight, ArrowDown } from 'lucide-react';
import { SlidersVertical, MoreVertical, Check } from 'lucide-react';
import { useState, useEffect } from 'react';
import ProductList from '../../Componets/product/product';

const ShopPage = () => {

  const reviews = [
    {
      id: '1',
      name: `Samantha D.`,
      lorem: '"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. Its become my favorite go-to shirt.',
      posted: 'Posted on August 14, 2023'
    },
    {
      id: '2',
      name: `Alex M.`,
      lorem: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
      posted: 'Posted on August 15, 2023'
    },
    {
      id: '3',
      name: `Ethan R.`,
      lorem: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
      posted: 'Posted on August 16, 2023'
    },
    {
      id: '4',
      name: `Olivia P. `,
      lorem: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
      posted: 'Posted on August 17, 2023'
    },
    {
      id: '5',
      name: `Liam K. `,
      lorem: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
      posted: 'Posted on August 18, 2023'
    },
    {
      id: '6',
      name: `Ava H. `,
      lorem: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
      posted: 'Posted on August 19, 2023'
    }
  ];

  const faqs = [
    {
      question: "Q. Where do you Ship?",
      answer: "We ship worldwide except a few restricted countries."
    },
    {
      question: "Q. Can I cancel my order?",
      answer: "Yes, you can cancel your order within 24 hours."
    },
    {
      question: "How can I track my order?",
      answer: "You can track your order using the tracking link sent to your email."
    },
    {
      question: "Why can't I see any shipping process when I track my order?",
      answer: "Tracking updates can be delayed by 24–48 hours."
    },
    {
      question: "Do you allow exchanges or return?",
      answer: "Yes, we allow returns within 15 days under certain conditions."
    }
  ];


  const [openIndex, setOpenIndex] = useState(null);

  const toggelAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  };

  const images = [
    "/public/image 1@2x.png",
    "/public/image 5.png",
    "/public/image 6.png",

  ];

  // const [product, setProducts] = useState()
  const [count, setCount] = useState(1);
  const [mainImage, setMainImage] = useState(images[0]);
  const [activeTab, setActiveTab] = useState('rating')

  const increase = (e) => (
    setCount(e => e + 1)
  )

  const decrease = (e) => (
    setCount(e => e - 1)
  )

  // useEffect(() => {
  //   fetch('https://run.mocky.io/v3/bfc58352-6fe2-41cb-9f34-1a601b8ef577')
  //     .then(response => response.json())
  //     .then(data => setProducts(data))
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);

  return (
    <div className='Main-component'>
      <div className="Multipel-opening">
        <Link to='/' style={{ textDecoration: 'none' }}><p>Home <FiArrowRight /></p></Link>
        <p>Shop <FiArrowRight /></p>
        <p>Men <FiArrowRight /></p>
        <p>T-Shirt <FiArrowRight /></p>

        {/* Multipel-opening */}
      </div>

      <div className="main-component2">
        <div className="main-child1">
          {/* {product && product.images && ( */}
          <div className="child-1-child">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                className="w-20 h-20 object-cover cursor-pointer border hover:border-black"
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
          {/* )} */}
          <img src={mainImage} alt="" className='child-1-child2' />

          {/* main-child1 */}
        </div>
        <div className="main-child2">
          <h1>ONE LIFE GRAPHICS T-SHIRT</h1>
          <p><img src="Frame10.png" alt=""
            style={{ height: '22px' }} /> 4.5/5</p>
          <div className="discount">
            <p>$260 <span><del>$300</del></span></p>
            <ul>
              <li>-40%</li>
            </ul>
            {/* <<<discount>>>>> */}
          </div>
          <p style={{ fontSize: '16px', fontFamily: 'arial', lineHeight: '24px', color: '#00000099' }}>
            This graphic t-shirt which is perfect for any occasion. Crafted from a
            soft and <br /> breathable fabric, it offers superior comfort and style.</p>

          <div className="color-choosing">
            <p>Select Color</p>
            <div className="select-color">
              <ul>
                <li style={{ backgroundColor: '#4F4631' }}></li>
                <li style={{ backgroundColor: '#314F4A' }}></li>
                <li style={{ backgroundColor: '#31344F' }}></li>
              </ul>
            </div>
            {/* <<<<color-choosing>>>> */}
          </div>

          <div className="size-choosing">
            <p>Choose Size</p>
            <div className="select-size">
              <button>Small</button>
              <button>Medium</button>
              <button>Large</button>
              <button>X-Large</button>
            </div>
            {/* <<<size-choosing>>> */}
          </div>

          <div className="add-to-cart">
            <ul>
              <li className='decrease' onClick={decrease}><Minus style={{ height: '20px' }} /></li>
              <li className='show-count'>{count}</li>
              <li className='increase' onClick={increase}><Plus style={{ height: '20px' }} /></li>
            </ul>

            <button>Add to Cart</button>

            {/*<<< add-to-cart >>> */}
          </div>

          {/* main-child2 */}
        </div>

        {/* main-component2 */}
      </div>

      <div className="proDetail-Rating-FAQs">
        <p onClick={() => setActiveTab('product')}>Product Details</p>
        <p onClick={() => setActiveTab('rating')}>Rating & Reviews</p>
        <p onClick={() => setActiveTab('FAQs')}>FAQs</p>

        {/* <<<proDetail-Rating-FAQ>>> */}
      </div>

      <div className="AdjustMent">
        <p>All Review <span>(451)</span></p>
        <div className="adjust">
          <button className='Slider'><SlidersVertical /></button>
          <button className='arrDown'>Letest <FiArrowDown /> </button>
          <button className='Write-a-Review'>Write a Review</button>
        </div>

        {/*<<< adjustMent >>> */}
      </div>

      <div className="Details-Rating-FAQs-Section">
        {activeTab === 'rating' && (
          <div className='Rating-Page'>
            {reviews.map((reviews) => (
              <div className="mini-page" key={reviews.id}>
                <b><img src="Frame10.png" style={{ height: "22px" }} />
                  <MoreVertical /></b>
                <span>{reviews.name} <Check className='check' /></span>
                <p>{reviews.lorem}</p>
                <p>{reviews.posted}</p>
              </div>
            ))}
          </div>

        )}

        {activeTab === 'product' && (
          <div>
            <h2>Product Details</h2>
            <p>Here are customer reviews...</p>
          </div>
        )}

        {activeTab === 'FAQs' && (
          <div className='faqs-component'>
            <div className="faqs-main-1">
              <h1>FAQ</h1>
              <p>These are the most frequently asked questoins. <br />
                if you have any questoins, please <span>contact us.</span></p>
            </div>

            <div className="faqs-main-2">
              <div className="faqs-main3">
                <li className='offwhite'>Shipping has changed for international orders due to the current
                  pandemic situation. Please read <span>here</span></li>
                {faqs.map((faq, index) => (
                  <div className="faqsss" key={index}>
                    <p
                      onClick={() => toggelAnswer(index)}
                      className='questionP'
                    >
                      {faq.question}
                      <ArrowDown style={{ height: "19px" }} />
                    </p>
                    {openIndex === index && (
                      <p className='answerP'>{faq.answer}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <button className='load-more'>Load More <ArrowBigRight /></button>
        {/* <<<Details-Rating-FAQs-Section>>> */}
      </div>

      {/* Main-component*/}
    </div>
  )
}

export default ShopPage
