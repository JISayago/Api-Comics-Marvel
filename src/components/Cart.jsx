import React from 'react'
import CartItem from './CartItem';
import "./css/cart.css"

function Cart() {
 /*agregar cantidad de productos, lo pensé como numerito sobre imagen*/ 
  return (
    <div className='cart'>
          <div className='cart-slide'>
              <img className='cart-img' src='../../img/carro.png' alt='img-comic'></img>
              <div className='item-list'>
          <CartItem />          
              <CartItem />
              <CartItem />
                  <CartItem />
             </div>
              <button className='btn-comprar'>Comprar</button>
          </div>  
    </div>
  )
}
export default Cart;