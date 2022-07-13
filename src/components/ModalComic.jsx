import React,{useContext} from 'react';
import "./css/comics.css";
import ComicContext from "../context/ComicContext";
import CartContext from "../context/CartContext";

function ModalComic() {
    const { theComic } = useContext(ComicContext);
    const { setTheCart } = useContext(CartContext);
    let pathImg = "../../img/example.png";

    if (theComic.length !== 0) {
        pathImg = `${theComic.thumbnail.path}/portrait_incredible.${theComic.thumbnail.extension}`
    }


console.log("q llega:",theComic)
    const handleClick = (comic) => {
        setTheCart(comic)
    }
    const handleCloseClick = () => {
        let modal = document.getElementsByClassName("modal_comic")[0];
        modal.classList.remove("modal_comic_active");
        document.getElementsByTagName('body')[0].style.overflow = 'auto';
        
        document.getElementsByClassName('comic')[0].disabled = false; 
       
    }
    return (
        <div className='modal_comic'>
            <button onClick={handleCloseClick} className='x'>X</button>
          <div className='content_modal_comic'>
                <img src={pathImg } alt="img-comic-modal"></img>
          <div className='comic-modal-text'>
                    <h1>{theComic.title}</h1>
                    <p>{theComic.description}</p>
                    <h3>${ theComic.price}</h3>              
                </div>
                
            </div>
            <button onClick={() => handleClick(theComic)} className='agregar_carrito'>Agregar</button>
      </div>
  )
}
export default ModalComic;