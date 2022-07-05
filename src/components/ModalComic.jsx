import React,{useContext} from 'react';
import "./css/comics.css";
import ComicContext from "../context/ComicContext"

function ModalComic() {
    const { theComic } = useContext(ComicContext);
    console.log(theComic);
    return (
      <div className='modal_comic'>
          <div className='content_modal_comic'>
          <img src="../../img/example.png" alt="img-comic-modal"></img>
          <div>
                    <h1>{theComic.title}</h1>
                    <p>{theComic.description}</p>
                    <h3>${ theComic.price}</h3>
              <button>CXAS</button>
              </div>
          </div>
      </div>
  )
}
export default ModalComic;