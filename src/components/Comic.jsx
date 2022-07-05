import React, { useContext} from 'react';
import "./css/comics.css";
import ComicContext from "../context/ComicContext"
import { getElementError } from '@testing-library/react';

function Comic({ comic }) {
  const urlImg = `${comic.thumbnail.path}/portrait_xlarge.${comic.thumbnail.extension}`
  //console.log(comic.prices)
  const {setTheComic} = useContext(ComicContext);
  //console.log("asdasd",theComic)
  const handleClick = (cId) => {
    setTheComic(comic);
    let modal = document.getElementsByClassName("modal_comic");
    modal[0].style.visibility = "visible"
    }
  return (
    <button onClick={ () =>handleClick(comic.id) } className='comic'>      
     <img src={urlImg} alt={comic.title} />
      <h3 >{comic.title}</h3>
      </button>

  )
}
export default Comic;