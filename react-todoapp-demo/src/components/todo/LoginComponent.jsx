import { useState } from 'react'
import {useNavigate} from 'react-router-dom'


export default function LoginComponent(){

    const [user, setUser] = useState('jayslabs')
    const [pwd, setPassword] = useState()
    const [isSuccess, showSuccess] = useState()

    const navigate = useNavigate();

    function handleUserChange(event){
        //console.log(event.target.value)
        setUser(event.target.value)
    }

    function handlePwdChange(event){
        //console.log(event.target.value)
        setPassword(event.target.value)
    }

    function handleSubmit(){
        // console.log(user)
        // console.log(pwd)

        if (user==='jayslabs' && pwd==='password'){
            console.log('Login Successful.')
            showSuccess(true)
            navigate(`/welcome/${user}`)
        } else {
            console.log('Login failed.')
            showSuccess(false)
            navigate('/')
        }

    }

    return(
        <div className="login">
            <div className="loginForm">
                {isSuccess && <div className="successmsg">Authenticated Successfully</div>}
                {(isSuccess===false) && <div className="errormsg">Authenticated Failed</div>}
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