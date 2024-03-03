import { useAuth } from "./security/AuthContext"

export default function LogoutComponent(){

    const authCtx = useAuth()
    const logout = authCtx.setLoggedin(false)
    return(
        <div className="logout">
            <h1>You are Logged out.</h1>
        </div>
    )
}