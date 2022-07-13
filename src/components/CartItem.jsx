import React from 'react'
import "./css/cart.css";

function CartItem({ comic }) {
  let pathImg = `${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`;
  let price = comic.prices[0].price;
  return (
    <div className='cart_item'>
           <img className='cart_img_item' src={pathImg} alt="img-comic"/>
      <h3>{comic.title}</h3><label>${price}</label>
      <button>X</button>
    </div>
  )
}
export default CartItem; 
