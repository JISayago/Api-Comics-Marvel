import React, { useContext } from 'react';
import { ComicContextProvider } from '../context/ComicContext';
import Comic from './Comic';
import "./css/comics.css";
import ModalComic from './ModalComic';
import CartContext from "../context/CartContext";

function Comics({comics}) {
    const { search } = useContext(CartContext);
    let comicList = comics;
    if (search.length !== 0) {
        comicList =  comics.filter(
            c => c.title
                .toString()
                .toLowerCase()
                .includes(search.toLowerCase())
        );
    }


    return (
        <ComicContextProvider>
            <div className='comics'>
                {
                    comicList.length > 0 
                        ?
                        comicList.map(c => <Comic id={c.id} comic={c} /> )
                        :
                        <h1 className='comic_mensaje'>No Comics Found!</h1>
                }
                    <ModalComic />
            </div>
            </ComicContextProvider>
  )
}
export default Comics;
