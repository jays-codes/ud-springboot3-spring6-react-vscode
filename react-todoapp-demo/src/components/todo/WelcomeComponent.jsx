import {useParams} from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

export default function WelcomeComponent(){
    const {user} = useParams()

    const [message, setMessage] = useState(null)


    function callHWorldApi(){
        const urlPath = 'http://localhost:8082/hello/pathparam/' + user

        // axios.get('http://localhost:8082/yowbean',{withCredentials: true})
        axios.get(urlPath,{withCredentials: true})
        .then(
            (response) => successfulResponse(response)
        )
        .catch(
            (error) => errorResponse(error)
        )
        .finally(
            () => console.log('cleanup')
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