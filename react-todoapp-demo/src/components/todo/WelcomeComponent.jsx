import {useParams} from 'react-router-dom'
import axios from 'axios'

export default function WelcomeComponent(){
    const {user} = useParams()

    function callHWorldApi(){
        axios.get('http://localhost:8082/yowbean',{withCredentials: true})
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
        </div>
    )
}