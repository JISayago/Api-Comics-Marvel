import React from 'react';
import "./css/modalUser.css";

function ModalLogin() {

  const handleCloseClick = () => {
    login_close();
    document.getElementsByTagName('body')[0].style.overflow = 'auto';        
    document.getElementsByClassName('comic')[0].disabled = false; 
  }
  const login_close = () => {
    let login = document.getElementsByClassName("login")[0];
    login.classList.remove("login_show");
  }
  
  const handleClickReg = () => {
    handleCloseClick();
    if (document.getElementsByClassName('comic')[0].disabled === false) {
        register_show();
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
        document.getElementsByClassName('comic')[0].disabled = true; 
     }        
}
  const register_show = () => {
   
    let register = document.getElementsByClassName("register")[0];
    register.classList.add("register_show");
  }



  return (
    <div className='login'>
      <div>
        <h2 className='title'>Log-in</h2>
      <button onClick={handleCloseClick} className='x'>X</button>
      </div>
        <form className='form_data'>
        <div className='content_data user_name'>
        <label>User</label>
        <input className='input_data' type="text" id="user" name="user" />
        </div>
        <div className='content_data user_pass'>
          <label>Password</label>
        <input className='input_data' type="password" id="password" name="password" />
        </div>
        <div className='log_buttons'>
          <button type='submit'>Log-in</button>
          <a href='#' onClick={handleClickReg}>Register</a>
        </div>
        <div className='log_links'>
        <a href='#' className='forgoten_pass'>do yo forgot your password?</a>
          </div>
      </form>
    </div>
  )
}
export default ModalLogin;