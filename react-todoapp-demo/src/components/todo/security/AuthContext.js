import { createContext, useContext, useState } from "react";
import { executeJWTAuthAPI } from "../api/AuthenticationAPIService";
import { apiClient } from "../api/ApiClient";


//Create a Context
export const AuthCtx = createContext()
export const useAuth= () => useContext(AuthCtx)

//share created context
export default function AuthProvider({children}){

    //Put state in the context
    const [loggedin, setLoggedin] = useState(false)
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)

    // async function login(user, pwd){
    //     const batoken = 'Basic ' + window.btoa(user + ":" + pwd)
        

    //     try {
    //         //const response = await executeBasicAuthAPI(batoken)
    //         const response = await executeJWTAuthAPI(user,pwd)

    //         if (response.status===200){
    //             console.log('Login Successful.')
    //             setLoggedin(true)
    //             setUser(user)
    //             setToken(batoken)

    //             // apiClient.interceptors.request.use(
    //             //     (config) => {
    //             //         console.log('intercepting and adding a token')
    //             //         config.headers.Authorization = batoken
    //             //         return config
    //             //     }
    //             // )

    //             return true
    //         } else {
    //             //console.log('Login failed.')
    //             logout()
    //             return false
    //         }     
    //     }catch(error){
    //         logout()
    //         return false
    //     }
    // }

    async function login(user, pwd){

        try {
            const response = await executeJWTAuthAPI(user,pwd)

            if (response.status===200){
                const jwtToken = 'Bearer ' + response.data.token
                console.log('Login Successful.')
                setLoggedin(true)
                setUser(user)
                setToken(jwtToken)

                apiClient.interceptors.request.use(
                    (config) => {
                        console.log('intercepting and adding a token')
                        config.headers.Authorization = jwtToken
                        return config
                    }
                )

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

