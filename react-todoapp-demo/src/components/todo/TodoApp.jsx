
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './Todo.css'
import WelcomeComponent from './WelcomeComponent'
import ListTodosComponent from './ListTodosComponent'
import LoginComponent from './LoginComponent'
import LogoutComponent from './LogoutComponent'
import HeaderComponent from './HeaderComponent'
import ErrorComponent from './ErrorComponent'
import AuthProvider, {useAuth} from './security/AuthContext.js'

function AuthenticatedRoute({children}){
    const authCtx = useAuth()

    if (authCtx.loggedin) return children

    return <Navigate to="/"/>
}

export default function TodoApp(){

    return(
        <div className="todoapp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent/>
                    <Routes>
                        <Route path='/' element={<LoginComponent/>}/>
                        <Route path='/login' element={<LoginComponent/>}/>
                        <Route path='/welcome/:user' element={
                            <AuthenticatedRoute>
                                <WelcomeComponent/>
                            </AuthenticatedRoute>
                        }/>
                        <Route path='/todos' element={
                            <AuthenticatedRoute>
                                <ListTodosComponent/>
                            </AuthenticatedRoute>                        
                        }/>
                        <Route path='*' element={<ErrorComponent/>}/>
                        <Route path='/logout' element={
                            <AuthenticatedRoute>
                                <LogoutComponent/>
                            </AuthenticatedRoute>                                
                        }/>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>

        </div>
    )
}
