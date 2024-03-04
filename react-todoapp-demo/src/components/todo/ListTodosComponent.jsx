import { retrieveUserTodos } from "./api/TodosAPIService"
import { useEffect, useState } from "react"
import { useAuth } from "./security/AuthContext"

export default function ListTodosComponent(){

    const authCtx = useAuth()
    const user = authCtx.user
    const [todos, setTodos] = useState([])

    useEffect( ()=>refreshTodos(),[])

    function refreshTodos(){
        retrieveUserTodos(user)
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
        setTodos(response.data)
    }

    function errorResponse(error){
        console.log(error)        
    }

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
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toString()}</td>
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