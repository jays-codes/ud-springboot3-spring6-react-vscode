import {useParams} from 'react-router-dom'

export default function WelcomeComponent(){
    const {user} = useParams()
    console.log(user)

    return(
        <div className="Welcome">
            <h1>Welcome {user}!</h1>
        </div>
    )
}