import React,{useContext} from 'react';
import "./css/comics.css";
import ComicContext from "../context/ComicContext";
import CartContext from "../context/CartContext";
import TotalPriceContext from "../context/TotalPriceContext";

function ModalComic() {
    const { theComic } = useContext(ComicContext);
    const { theCart, setTheCart } = useContext(CartContext);
    const { total, setTotal } = useContext(TotalPriceContext);

    let pathImg = "../../img/example.png";
    let price = "0";
    let description = "Without description to show."

    if (theComic.length !== 0) {
        pathImg = `${theComic.thumbnail.path}/portrait_incredible.${theComic.thumbnail.extension}`;
        theComic.prices[0].price === 0 ? price = 1 : price = theComic.prices[0].price;
    }

    if (theComic.description !== "") {
        description = theComic.description;
    }

    const handleClick = (comic) => {
        setTheCart([...theCart, comic]);
        setTotal(total + price);
        handleCloseClick();
    }
    
    const handleCloseClick = () => {
        modal_close();
        document.getElementsByTagName('body')[0].style.overflow = 'auto';        
        document.getElementsByClassName('comic')[0].disabled = false; 
    }

    const modal_close = () => {
        let modal = document.getElementsByClassName("modal_comic")[0];
        modal.classList.remove("modal_comic_active");
    }

    return (
        <div className='modal_comic'>
            <button onClick={handleCloseClick} className='x'>X</button>
          <div className='content_modal_comic'>
                <img src={pathImg} alt="img-comic-modal"></img>
          <div className='comic-modal-text'>
                    <h1>{theComic.title}</h1>
                    <p>{description}</p>
                    <h3><strong>${price}</strong></h3>              
                </div>
            </div>
            <button onClick={() => handleClick(theComic)} className='agregar_carrito'>Agregar</button>
      </div>
  )
}
export default ModalComic;