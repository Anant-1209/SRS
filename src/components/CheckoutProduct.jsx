import React from "react";
import "./CheckoutProduct.css";
import {useStateValue} from "./StateProvider"

function CheckoutProduct({ id, title, image, prize, rating }) {
const [{basket},dispatch]= useStateValue();

const removeFromBasket = () =>{
  dispatch({
    type:"REMOVE_FROM_BASKET",
    id:id,
  })
}

  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct_image" />

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_prize">
          <small>RS</small>
          <strong> {prize}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>*</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
