import { createContext, useContext, useState } from "react";

//Create a Context
export const AuthCtx = createContext()
export const useAuth= () => useContext(AuthCtx)

//share created context
export default function AuthProvider({children}){

    //Put state in the context
    const [loggedin, setLoggedin] = useState(false)
    const [user, setUser] = useState(null)

    function login(user, pwd){
        if (user==='jaymenorca' && pwd==='123456'){
            console.log('Login Successful.')
            setLoggedin(true)
            setUser(user)
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

    const statesToShare = {user, loggedin, login, logout}

    return (
        <AuthCtx.Provider value={statesToShare}>
            {children}
        </AuthCtx.Provider>
    )
}

