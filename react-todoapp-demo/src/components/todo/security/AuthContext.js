import { createContext, useContext, useState } from "react";

//Create a Context
export const AuthCtx = createContext()
export const useAuth= () => useContext(AuthCtx)

//share created context
export default function AuthProvider({children}){

    //Put state in the context
    const [loggedin, setLoggedin] = useState(false)
    
    function login(user, pwd){
        if (user==='jayslabs' && pwd==='password'){
            console.log('Login Successful.')
            setLoggedin(true)
            return true
        } else {
            console.log('Login failed.')
            setLoggedin(false)
            return false
        }        
    }
    function logout(){
        setLoggedin(false)        
    }

    const statesToShare = {loggedin, login, logout}

    return (
        <AuthCtx.Provider value={statesToShare}>
            {children}
        </AuthCtx.Provider>
    )
}

