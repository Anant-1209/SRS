import React from 'react'
import { useStateValue } from './StateProvider';
import"./product.css";

function Product({id,title,prize,rating,img}) {

    const[state, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id: id,
                image: img,
                prize:prize,
                rating:rating,
            },
        });
    };




  return (
    <div>
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className='product_prize'>RS{prize}</p>
                <div className="product_rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_,i) => (
                            <p>*</p>
                        ))
                    }
                    
                     </div>
            </div>

           
            <img src={img} alt="product image" />

            <button onClick={addToBasket}>Add to Basket</button>
        </div>



    </div>
  )
}

export default Product