
import { useState } from 'react'
import './Todo.css'

export default function TodoApp(){
    return(
        <div className="todoapp">
            Todo Management Application
            <LoginComponent/>
            <WelcomeComponent/>
        </div>
    )
}

function LoginComponent(){

    const [user, setUser] = useState('jayslabs')
    const [pwd, setPassword] = useState()


    function handleUserChange(event){
        console.log(event.target.value)
        setUser(event.target.value)
    }

    function handlePwdChange(event){
        console.log(event.target.value)
        setPassword(event.target.value)
    }


    return(
        <div className="login">
            <div className="success">Authenticated Successfully</div>
            <div className="success">Authentication Failed. </div>
            <div className="loginForm">
                <div>
                    <label>User</label>
                    <input type="text" name="user" value={user} onChange={handleUserChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="pwd" onChange={handlePwdChange} />
                </div>
                <div>
                    <button type="button" name="login" >login</button>
                </div>
            </div>
        </div>
    )
}


function WelcomeComponent(){
    return(
        <div className="Welcome">
            WelcomeComponent
        </div>
    )
}