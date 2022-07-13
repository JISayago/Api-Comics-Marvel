import React, { useContext} from 'react';
import "./css/comics.css";
import ComicContext from "../context/ComicContext"

function Comic({ comic }) {
  const urlImg = `${comic.thumbnail.path}/portrait_xlarge.${comic.thumbnail.extension}`

  const { setTheComic } = useContext(ComicContext);

  const handleClick = (cId) => {
    if (document.getElementsByClassName('comic')[0].disabled == false) {
      setTheComic(comic)
      let modal = document.getElementsByClassName("modal_comic")[0];
      //modal[0].style.visibility = "visible";
      modal.classList.add("modal_comic_active");
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';
      document.getElementsByClassName('comic')[0].disabled = true; 
   }

  }
  return (
    <button onClick={ () =>handleClick(comic.id) } className='comic'>      
     <img src={urlImg} alt={comic.title} />
      <h3 >{comic.title}</h3>
      </button>
  )
}
export default Comic;