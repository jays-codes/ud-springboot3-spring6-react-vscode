import { createContext, useContext, useState } from "react";

//Create a Context
export const AuthCtx = createContext()
export const useAuth= () => useContext(AuthCtx)

//share created context
export default function AuthProvider({children}){

    //Put state in the context
    const [loggedin, setLoggedin ] = useState(false)

    const [number, setNumber] = useState(10)

    

    setInterval( ()=>setNumber(number+1),10000)

    return (
        <AuthCtx.Provider value={{number,loggedin}}>
            {children}
        </AuthCtx.Provider>
    )
}

