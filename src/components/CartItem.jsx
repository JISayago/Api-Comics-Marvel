import React, { useContext } from 'react'
import "./css/cart.css";
import CartContext from "../context/CartContext";

function CartItem({ comic, setTotal,total}) {
  let pathImg = `${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`;
  let price;
  comic.prices[0].price === 0 ? price = 1 : price = comic.prices[0].price;

  const { theCart, setTheCart } = useContext(CartContext);

  const handleClick = (c) => {
    let cart = theCart.filter(items => 
      items.id !== c.id
    )
    setTheCart(cart);
    let lastPrice = c.prices[0].price;
    lastPrice === 0 ?
      lastPrice = 1 :
      lastPrice = c.prices[0].price;
    setTotal(total - lastPrice);
    console.log(total)
  }

  return (
    <div className='cart_item'>
      <img className='cart_img_item' src={pathImg} alt="img-comic" />
      <h3 className='cart_item_text'>{comic.title}</h3>
      
      <div className='cart_item_left'>
        <div className='cart_item_price'>
          <label className='cart_item_price_label'>${price}</label>
          </div>
      <button onClick={()=> handleClick(comic)}>X</button>
      </div>
      </div>
  )
}
export default CartItem; 
