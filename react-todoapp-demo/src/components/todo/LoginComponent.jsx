import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useAuth } from './security/AuthContext'


export default function LoginComponent(){

    const [user, setUser] = useState('jayslabs')
    const [pwd, setPassword] = useState()
    const [isError, showError] = useState(false)
    const navigate = useNavigate()
    const authCtx = useAuth()
    
    function handleUserChange(event){
        //console.log(event.target.value)
        setUser(event.target.value)
    }

    function handlePwdChange(event){
        //console.log(event.target.value)
        setPassword(event.target.value)
    }

    function handleSubmit(){

        if (authCtx.login(user,pwd)){
            navigate(`/welcome/${user}`)
        } else {
            showError(true);
        }
    }

    return(
        <div className="login">
            <div className="loginForm">
                {isError && <div className="errormsg">Authenticated Failed</div>}
                <div>
                    <label>User</label>
                    <input type="text" name="user" value={user} onChange={handleUserChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="pwd" onChange={handlePwdChange} />
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>login</button>
                </div>
            </div>
        </div>
    )
}