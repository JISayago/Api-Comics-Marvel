import React from 'react'
import "./css/cart.css";

function CartItem() {
  return (
    <div className='cart_item'>
           <img className='cart_img_item' src="../../img/lupa.png" alt="img-comic"/>
      <h3>titulo del comic comprado </h3><label>$6565</label>
      <button>X</button>
    </div>
  )
}
export default CartItem; 
