import React from 'react';
import "./css/navbar.css";

function NavbarTop() {
  return (
      <div className="navbar navtop">
          <form>
              <input className='search' type="text" placeholder='Ant-Man....' />
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