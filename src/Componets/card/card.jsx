// import './card.css'
import React ,{useEffect,useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
// import { CartContext } from '../context/Cartcontext'
// import { CartContext } from "../../../components/context/CartContext";
import { CartContext } from '../context/CartContext';







function card() {
    const[data,setdata]=useState([])
    const {addToCart } = useContext(CartContext);    

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((Response) => Response.json())
        .then((result) => setdata(result))
    },[])

    const handleAddToCart = (data) => {
        addToCart(data);
    }
  return (
    <div>
       
        <div className="cardmain">
            {data.slice(1,5).map((item) => (
                <div className="carddata" key ={item.id}>
                    <img src={item.image} alt="" />
                    <h2>{item.category}</h2>0
                    <h4>Price:{item.price}</h4>
                    <button onClick={() => handleAddToCart(item)}>Add to cart</button>
                </div>
            )) }
        </div>
       
    </div>
  )
}

export default card