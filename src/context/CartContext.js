import React,{useState} from "react";

const Context = React.createContext({})

export function CartContextProvider({ children }) {
    const [theCart, setTheCart] = useState([]);

    return <Context.Provider value={{ theCart, setTheCart }}>
        {children}
    </Context.Provider>
}
export default Context;