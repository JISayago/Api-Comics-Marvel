import React from 'react';
import "./css/modalUser.css";

function ModalRegister
() {
  return (
    <div className='register'>
      <form>
        <input type="text" id="user" name="user" />
        <input type="password" id="password" name="password"/>
      </form>
    </div>
  )
}
export default ModalRegister;