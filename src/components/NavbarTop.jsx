import React, { useContext } from 'react';
import "./css/navbar.css";
import CartContext from "../context/CartContext";

function NavbarTop() {

    const { setSearch } = useContext(CartContext);
    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }
  return (
      <div className="navbar navtop">
          <form onChange={handleChange}>
              <input  className='search' type="text" placeholder='Ant-Man....' />
              <button>search</button>
          </form>
          <img className='marvel' src='../../img/marvel.png'></img>
              <div>
              <a href='#'>Log-in</a>
              <label>/</label>
          <a href='#'>Register</a>  
              </div>
          
      </div>
  )
}
export default NavbarTop;