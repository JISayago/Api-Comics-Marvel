import React, { useContext} from 'react';
import "./css/comics.css";
import ComicContext from "../context/ComicContext";

function Comic({ comic }) {
  const urlImg = `${comic.thumbnail.path}/portrait_xlarge.${comic.thumbnail.extension}`;
  const { setTheComic } = useContext(ComicContext);

  const handleClick = () => {
    if (document.getElementsByClassName('comic')[0].disabled === false) {
      setTheComic(comic)
      modal_show();
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';
      document.getElementsByClassName('comic')[0].disabled = true; 
   }
  }

  const modal_show = () => {
    let modal = document.getElementsByClassName("modal_comic")[0];
    modal.classList.add("modal_comic_active");
  }
  return (
    <button onClick={ handleClick } className='comic'>      
     <img src={urlImg} alt={comic.title} />
      <h3 >{comic.title}</h3>
      </button>
  )
}
export default Comic;