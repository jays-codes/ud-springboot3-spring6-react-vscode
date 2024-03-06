import {Link} from 'react-router-dom'
import { AuthCtx, useAuth } from './security/AuthContext'


export default function HeaderComponent(){

    const authCtx = useAuth()
    //const user = authCtx.user
    console.log("loggedin: " + authCtx.loggedin)
    console.log(AuthCtx)

    function logoutHandler(){
        authCtx.logout();
    }

    return(
        <header className="border-bottom border-light border-5 mb-5 p-2">
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://www.in28minutes.com">JaysLabs</a>
                    <div className="collapse navbar-collapse">
                    {(authCtx.loggedin===true) && 
                    
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5"><Link className="nav-link" to="/welcome/{authCtx.user}">Home</Link></li>
                            <li className="nav-item fs-5"><Link className="nav-link" to="/todos">Todos</Link></li>
                        </ul>
                    }           
                    </div>
                    
                    <ul className="navbar-nav">
                        {(authCtx.loggedin===false) && <li className="nav-item fs-5"><Link className="nav-link" to="/login">Login</Link></li>}
                        
                        {(authCtx.loggedin===true) && <li className="nav-item fs-5"><Link className="nav-link" to="/logout" onClick={logoutHandler}>Logout</Link></li>}
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    )
}