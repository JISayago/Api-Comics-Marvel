import React from 'react';
import "./css/modalUser.css";

function ModalRegister() {
  const handleCloseClick = () => {
    register_close();
    document.getElementsByTagName('body')[0].style.overflow = 'auto';        
    document.getElementsByClassName('comic')[0].disabled = false; 
  }
  const register_close = () => {
    let register = document.getElementsByClassName("register")[0];
    register.classList.remove("register_show");
  }
  return (
    <div className='register'>
      <div>
        <h2 className='title'>Register</h2>
      <button onClick={handleCloseClick} className='x'>X</button>
      </div>
      <form className='form_data'>
      <div className='content_data user_email'>
        <label>Email</label>
        <input className='input_data' type="email" id="email" name="email" />
        </div>
        <div className='content_data user_name'>
        <label>User</label>
        <input className='input_data' type="text" id="user" name="user" />
        </div>
        <div className='content_data user_pass'>
          <label>Password</label>
          <input className='input_data' type="password" id="password" name="password" />          
        </div>
        <div className='content_data user_confirm_pass'>
          <label>Confirm Password</label>
          <input className='input_data' type="password" id="confirm_password" name="confirm_password" />          
        </div>
        <div className='log_buttons'>
          <button className='register_button' type='submit'>Register</button>
          <a href='#' onClick={handleCloseClick}>Cancel</a>
        </div>
      </form>
    </div>
  )
}
export default ModalRegister;