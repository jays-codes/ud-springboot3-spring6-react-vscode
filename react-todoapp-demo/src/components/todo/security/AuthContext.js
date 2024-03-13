import { createContext, useContext, useState } from "react";
import {executeBasicAuthService} from "../api/HWorldAPIService"


//Create a Context
export const AuthCtx = createContext()
export const useAuth= () => useContext(AuthCtx)

//share created context
export default function AuthProvider({children}){

    //Put state in the context
    const [loggedin, setLoggedin] = useState(false)
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(false)

    async function login(user, pwd){
        const batoken = 'Basic ' + window.btoa(user + ":" + pwd)
        

        try {
            const response = await executeBasicAuthService(batoken)
    
            if (response.status==200){
                console.log('Login Successful.')
                setLoggedin(true)
                setUser(user)
                setToken(batoken)
                return true
            } else {
                //console.log('Login failed.')
                logout()
                return false
            }     
        }catch(error){
            logout()
            return false
        }
    }


    function logout(){
        setLoggedin(false)
        setToken(null)
        setUser(null)        
    }

    const statesToShare = {user, loggedin, login, logout}

    return (
        <AuthCtx.Provider value={statesToShare}>
            {children}
        </AuthCtx.Provider>
    )
}

