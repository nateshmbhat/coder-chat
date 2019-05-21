import { createContext } from "react";

const totalRows : number = Math.ceil(window.innerHeight/20) ; 

const globalContext = createContext({
    totalRows : totalRows
})

export default globalContext ; 