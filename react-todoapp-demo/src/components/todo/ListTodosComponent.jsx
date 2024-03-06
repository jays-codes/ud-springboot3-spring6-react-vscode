import { deleteTodoAPI, retrieveTodosAPI } from "./api/TodosAPIService"
import { useEffect, useState } from "react"
import { useAuth } from "./security/AuthContext"

export default function ListTodosComponent(){

    const authCtx = useAuth()
    const user = authCtx.user
    const [todos, setTodos] = useState([])
    const [msg, setMsg] = useState(null)

    useEffect( ()=>refreshTodos(),[] )

    function refreshTodos(){
        console.log("inside refreshTodos")
        //console.log("id= " + id)

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

    function callRetrieveTodoApi(id){
        // console.log("inside callRetrieveTodoApi")
        // console.log("id= " + id)

        // retrieveUserTodo(user, id)
        // .then(
        //     (response) => setTodos(response.data)
        // )
        // .catch(
        //     (error) => console.log(error)
        // )
        // .finally(
        //     () => console.log('cleanup')
        // )
    }

    function callDeleteTodo(id){
        // console.log("inside callDeleteTodoApi")
        // console.log("id= " + id)

        deleteTodoAPI(user, id)
        .then( ()=>{
            setMsg(`Todo #${id} Deleted.`)
            refreshTodos()

        }
            //(response) => setTodos(response.data)
        )
        .catch(
            (error) => console.log(error)
        )
        .finally(
            () => console.log('cleanup')
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
                            <th>id</th>
                            <th>description</th>
                            <th>done?</th>
                            <th>target date</th>
                            <td></td>
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
                                <td><button className="btn btn-warning" onClick={() => callDeleteTodo(todo.id)}>x</button> | <button className="btn btn-success" onClick={callRetrieveTodoApi}>...</button></td>
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