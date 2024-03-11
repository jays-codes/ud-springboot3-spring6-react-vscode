import { deleteTodoAPI, retrieveTodoAPI, retrieveTodosAPI } from "./api/TodosAPIService"
import { useEffect, useState } from "react"
import { useAuth } from "./security/AuthContext"
import { useNavigate } from "react-router-dom"

export default function ListTodosComponent(){

    const authCtx = useAuth()
    const user = authCtx.user
    const [todos, setTodos] = useState([])
    const [msg, setMsg] = useState(null)
    const navigate = useNavigate()

    
    useEffect( ()=>refreshTodos(),[] )
    
    function refreshTodos(){
    
        retrieveTodosAPI(user)
        .then(
            (response) => setTodos(response.data)
        )
        .catch(
            (error) => console.log(error)
        )
        .finally(
        )
    }

    function callRetrieveTodo(id){
        navigate(`/todo/${id}`)
    }

    function callCreateTodo(){
        navigate('/todo')
    }

    function callDeleteTodo(id){

        deleteTodoAPI(user, id)
        .then( ()=>{
            setMsg(`Todo #${id} Deleted.`)
            refreshTodos()

            }
        )
        .catch(
            (error) => console.log(error)
        )
        .finally(
        )
    }

    return(
        <div className="container">
            <h1>Todo List</h1>
            {msg && <div className="alert alert-warning">{msg}</div>}
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            {/* <th>Id</th> */}
                            <th>Description</th>
                            <th>Done?</th>
                            <th>Target Date</th>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        todos.map(
                            todo=>(
                            <tr  key={todo.id}>
                                {/* <td>{todo.id}</td> */}
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toString()}</td>
                                <td><button className="btn btn-warning" onClick={() => callDeleteTodo(todo.id)}>x</button> | <button className="btn btn-success" onClick={() => callRetrieveTodo(todo.id)}>...</button></td>
                            </tr>    
                            )
                        )   
                        }
                    </tbody>
                </table>
                <button className="btn btn-success m-5" onClick={() => callCreateTodo()}>Add Todo</button>
            </div>
        </div>
    )
}