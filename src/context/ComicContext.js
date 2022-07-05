import React,{useState} from "react";

const Context = React.createContext({})
export function ComicContextProvider({ children }) {
    const [theComic, setTheComic] = useState([]);

    return <Context.Provider value={{ theComic, setTheComic }}>
        {children}
    </Context.Provider>
}
export default Context;