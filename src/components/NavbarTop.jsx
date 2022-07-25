import React, { useContext } from 'react';
import "./css/navbar.css";
import CartContext from "../context/CartContext";

function NavbarTop() {

    const { setSearch } = useContext(CartContext);
    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }
    const handleClickLog = () => {
        login_show();
    }
    const handleClickReg = () => {
        register_show()
    }
    const login_show = () => {
        let login = document.getElementsByClassName("login")[0];
        login.classList.add("login_show");
    }
    const register_show = () => {
        let register = document.getElementsByClassName("register")[0];
        register.classList.add("register_show");
      }
  return (
      <div className="navbar navtop">
          <form onChange={handleChange}>
              <input  className='search' type="text" placeholder='Ant-Man....' />
              <button>search</button>
          </form>
          <img className='marvel' src='../../img/marvel.png'></img>
              <div className='navtop_log_reg'>
              <button className='log_reg log' onClick={handleClickLog}>Log-in</button >
              <label>/</label>
              <button className='log_reg reg' onClick={handleClickReg}>Register</button >  
              </div>
          
      </div>
  )
}
export default NavbarTop;