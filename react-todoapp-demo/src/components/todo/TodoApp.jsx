
import { useState } from 'react'
import {BrowserRouter, Routes, Route, useNavigate, useParams, Link} from 'react-router-dom'
import './Todo.css'

export default function TodoApp(){
    return(
        <div className="todoapp">
            {/* Todo Management Application */}
            <HeaderComponent/>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent/>}/>
                    <Route path='/login' element={<LoginComponent/>}/>
                    <Route path='/welcome/:user' element={<WelcomeComponent/>}/>
                    <Route path='/todos' element={<ListTodosComponent/>}/>
                    <Route path='*' element={<ErrorComponent/>}/>
                    <Route path='/logout' element={<LogoutComponent/>}/>
                </Routes>
            </BrowserRouter>
            <FooterComponent/>
        </div>
    )
}

function LoginComponent(){

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

function WelcomeComponent(){
    const {user} = useParams()
    console.log(user)

    return(
        <div className="Welcome">
            <h1>Welcome {user}!</h1>
            Your <Link to="/todos">To Do's</Link>
        </div>
    )
}

function ErrorComponent(){
    return(
        <div className="Error">
            Error 404
        </div>
    )
}

function ListTodosComponent(){

    const today = new Date()
    const targetDt = new Date(today.getFullYear()+12,today.getMonth(), today.getDay())

    const todos=[
        {id:1, desc:'Learn Springboot', done: false, targetDt:targetDt},
        {id:2, desc:'Learn Microservices', done: false, targetDt:targetDt},
        {id:3, desc:'Learn Devops', done: false, targetDt:targetDt},    
        {id:4, desc:'Learn App Design', done: false, targetDt:targetDt},
        {id:5, desc:'Learn Enterprise Patterns', done: false, targetDt:targetDt},
        {id:6, desc:'Learn Systems Architecture', done: false, targetDt:targetDt}    
    ]
    return(
        <div className="container">
            <h1>Things you want to do:</h1>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>description</td>
                            <td>is done</td>
                            <td>target date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        todos.map(
                            todo=>(
                            <tr  key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.desc}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDt.toDateString()}</td>
                            </tr>    
                            )
                        )   
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function HeaderComponent(){
    return(
        <div className="header">
            Header <hr/>
        </div>
    )
}

function FooterComponent(){
    return(
        <div className="footer">
            <hr/>Footer 
        </div>
    )
}

function LogoutComponent(){
    return(
        <div className="logout">
            <h1>You are Logged out.</h1>
        </div>
    )
}