import React, { useContext } from 'react';
import "./css/navbar.css";
import CartContext from "../context/CartContext";

function NavbarTop() {

    const { setSearch } = useContext(CartContext);
    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    const handleClickFormulario = (accion) => {
        if(document.getElementsByClassName('comic')[0].disabled === false){ 
            form_show(accion);
            document.getElementsByTagName('body')[0].style.overflow = 'hidden';
            document.getElementsByClassName('comic')[0].disabled = true;
        }
    }
    
    const form_show = (accion) => {
        if(accion === "log"){
        let login = document.getElementsByClassName("login")[0];
            login.classList.add("login_show");
        }
        else {
            let register = document.getElementsByClassName("register")[0];
        register.classList.add("register_show");
       } 
    }
  return (
      <div className="navbar navtop">
          <form onChange={handleChange}>
              <input  className='search' type="text" placeholder='Ant-Man....' />
              <button>search</button>
          </form>
          <img className='marvel' src='../../img/marvel.png'></img>
              <div className='navtop_log_reg'>
              <button className='log_reg log' onClick={() => handleClickFormulario("log")}>Log-in</button >
              <label>/</label>
              <button className='log_reg reg' onClick={() => handleClickFormulario("reg")}>Register</button >  
              </div>
          
      </div>
  )
}
export default NavbarTop;