import React from 'react';
import { ComicContextProvider } from '../context/ComicContext';
import Comic from './Comic';
import "./css/comics.css";
import ModalComic from './ModalComic';

function Comics({comics}) {
  
    return (
        <ComicContextProvider>
        <div className='comics'>
            {comics.map(c => <Comic id={c.id} comic={c} />)}
            <ModalComic/>
            </div>
            </ComicContextProvider>
  )
}
export default Comics;
