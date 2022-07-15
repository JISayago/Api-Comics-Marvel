import React, {useContext} from 'react'
import CartItem from './CartItem';
import "./css/cart.css";
import CartContext from "../context/CartContext";
import TotalPriceContext from "../context/TotalPriceContext";

function Cart() {
  const { theCart } = useContext(CartContext);
  const { total,setTotal } = useContext(TotalPriceContext);
  
 /*agregar cantidad de productos, lo pensé como numerito sobre imagen*/ 
  return (
    <div className='cart'>
      <div className='cart-slide'>
        <div className='cart_top'>
      <label className='cart_total'>Total:${total}</label>
          <img className='cart-img' src='../../img/carro.png' alt='img-comic'></img>
          </div>
          <div className='item-list'>
          {theCart.map(c => {             
            return <CartItem id={c.id} comic={c} setTotal={setTotal} total = {total} />}
          )}
             </div>
        <button className='btn-comprar'>Comprar</button>
          </div>  
    </div>
  )
}
export default Cart;