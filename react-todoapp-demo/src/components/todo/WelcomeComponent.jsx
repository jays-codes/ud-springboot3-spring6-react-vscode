import { useState } from 'react'
import { retrieveHWorldBean } from './api/HWorldAPIService'
import { useAuth } from './security/AuthContext'

export default function WelcomeComponent(){

    const [message, setMessage] = useState(null)
    const authCtx = useAuth()
    const user = authCtx.user

    function callHWorldApi(){
        retrieveHWorldBean(user)
        .then(
            (response) => successfulResponse(response)
        )
        .catch(
            (error) => errorResponse(error)
        )
        .finally(
           // () => console.log('cleanup')
        )
    }

    function successfulResponse(response){
        console.log(response)
        setMessage(response.data.msg)
    }

    function errorResponse(error){
        console.log(error)        
    }


    return(
        <div className="Welcome">
            <h1>Welcome {user}!</h1>
            <div>
                <button className="btn btn-success m-5" onClick={callHWorldApi}>HWorld REST API</button>
            </div>
            <div className="text-info">{message}</div>
        </div>
    )
}