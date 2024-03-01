
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './Todo.css'
import WelcomeComponent from './WelcomeComponent'
import ListTodosComponent from './ListTodosComponent'
import LoginComponent from './LoginComponent'
import LogoutComponent from './LogoutComponent'
import HeaderComponent from './HeaderComponent'
import ErrorComponent from './ErrorComponent'

export default function TodoApp(){
    return(
        <div className="todoapp">
            {/* Todo Management Application */}
            <BrowserRouter>
                <HeaderComponent/>
                <Routes>
                    <Route path='/' element={<LoginComponent/>}/>
                    <Route path='/login' element={<LoginComponent/>}/>
                    <Route path='/welcome/:user' element={<WelcomeComponent/>}/>
                    <Route path='/todos' element={<ListTodosComponent/>}/>
                    <Route path='*' element={<ErrorComponent/>}/>
                    <Route path='/logout' element={<LogoutComponent/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
