import React from 'react'
import Cart from './Cart';
import Comics from './Comics';
import LogReg from './LogReg';
import '../App.css';

function BodyContent({comics}) {
    
  return (
    <div className='content'>
            {<Comics comics={comics} />}
            <Cart />
            <LogReg />
          </div>
  )
}
export default BodyContent;