import React,{useState} from "react";

const Context = React.createContext({})

export function TotalPriceContextProvider({ children }) {
    const [total, setTotal] = useState(0);

    return <Context.Provider value={{ total, setTotal }}>
        {children}
    </Context.Provider>
}
export default Context;