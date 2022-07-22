import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import "./css/footer.css";

function FooterTop() {

  return (
    <div className='footer_top'>
      <div className='img_footer'><img className='marvel' src='../../img/marvel.png'></img></div>
      <div className='datos_footer'>
        <label>0800-xxxx-222</label>
        <label>mailmarvel@gmail.com</label>
        <label>General del Monte 888</label>

      </div>
      <div className='redes_sociales'>
        <a href='#'><FontAwesomeIcon className='icons' icon={['fab', 'facebook']} /></a>
        <a href='#'><FontAwesomeIcon className='icons' icon={['fab', 'twitter']} /></a>
        <a href='#'><FontAwesomeIcon className='icons' icon={['fab', 'reddit']} /></a>
        <a href='#'><FontAwesomeIcon className='icons' icon={['fab', 'youtube']} /></a>
      </div>
    </div>
  )
}
export default FooterTop;
