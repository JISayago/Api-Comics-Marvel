import React,{useState} from "react";

const Context = React.createContext({})

export function CartContextProvider({ children }) {
    const [theCart, setTheCart] = useState([]);
    const [search, setSearch] = useState([])

    return <Context.Provider value={{ theCart, setTheCart,search,setSearch }}>
        {children}
    </Context.Provider>
}
export default Context;