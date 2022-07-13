import { useEffect, useState } from 'react';
import { CartContextProvider } from './context/CartContext';
import './App.css';
import md5 from 'md5';
import Comics from './components/Comics';
import Navbar from './components/Navbar';
import Cart from './components/Cart';


function App() {

  let tsOriginal = Date.now();
  let ts = tsOriginal.toString();
  const mD5 = md5(ts + "581ec703794f6ad5e89445b7c15dfc51a4c85447515c3e2919acc81529447be08a173f9f");
  
  const [comics, setComics] = useState([]);
 useEffect(() => {
  
   return () => {
     fetch('http://gateway.marvel.com/v1/public/comics?ts=' + ts + '&apikey=515c3e2919acc81529447be08a173f9f&hash=' + mD5)
       .then(response => response.json())
      .then(comic => setComics(comic.data.results));
   }
 }, [])
 
  return (
    <CartContextProvider>
      <div className="App">
        
             <Navbar/>
             <div className='content'>
        {<Comics comics={comics} />}
          <Cart />
          </div>
        </div>
        
      </CartContextProvider>
  );
}

export default App;
