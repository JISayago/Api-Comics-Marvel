import React from 'react'
import FooterBottom from './FooterBottom';
import FooterTop from './FooterTop';
import "./css/footer.css";

function Footer() {
  return (
      <div className='footer'>
          <FooterTop/>
          <FooterBottom/>
    </div>
  )
}

export default Footer;