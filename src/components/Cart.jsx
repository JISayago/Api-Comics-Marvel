import React, {useContext} from 'react'
import CartItem from './CartItem';
import "./css/cart.css";
import CartContext from "../context/CartContext";
import TotalPriceContext from "../context/TotalPriceContext";

function Cart() {
  const { theCart } = useContext(CartContext);
  const { total, setTotal } = useContext(TotalPriceContext);
  let cantItems = theCart.length;
  

   return (
    <div className='cart'>
      <div className='cart-slide'>
        <div className='cart_top'>
           <div className='cart_img_pop'>
           <img className='cart-img' src='../../img/carro.png' alt='img-comic'></img>
            <div className={cantItems <= 0 ? "cart_no_pop" : 'cart_pop'}><small>{cantItems}</small></div>
           </div>
           <label className='cart_total'>Total:${total}</label>
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