import React from 'react';
import "./css/modalUser.css";

function ModalLogin() {
  return (
    <div className='login'>
      <form>
        <input type="text" id="user" name="user" />
        <input type="password" id="password" name="password"/>
      </form>
    </div>
  )
}
export default ModalLogin;