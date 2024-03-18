import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

import {useStateValue} from "./StateProvider";
function Checkout() {

    const[{basket},dispatch]=useStateValue();
  return (
    <div>
        <div className="checkout">
            <div className="checkout_left">
    <img src="https://t3.ftcdn.net/jpg/02/41/43/18/360_F_241431868_8DFQpCcmpEPVG0UvopdztOAd4a6Rqsoo.jpg" alt="" className="checkout_add" />

        <div>
            <h2 className="checkout_title">
                Your Shopping Basket
            </h2>

                {basket.map(item => (
                    <CheckoutProduct
                    id = {item.id}
                    title = {item.title}
                    image ={item.image}
                    prize = {item.prize}
                    rating = {item.rating}
                    />  
                ))}
            
        </div>
            </div>


            <div className="checkout_right">
            <Subtotal/>
            </div>
        </div>
    </div>
  )
}

export default Checkout