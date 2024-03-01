export default function ListTodosComponent(){

    const today = new Date()
    const targetDt = new Date(today.getFullYear()+12,today.getMonth(), today.getDay())

    const todos=[
        {id:1, desc:'Learn Springboot', done: false, targetDt:targetDt},
        {id:2, desc:'Learn Microservices', done: false, targetDt:targetDt},
        {id:3, desc:'Learn Devops', done: false, targetDt:targetDt},    
        {id:4, desc:'Learn App Design', done: false, targetDt:targetDt},
        {id:5, desc:'Learn Enterprise Patterns', done: false, targetDt:targetDt},
        {id:6, desc:'Learn Systems Architecture', done: false, targetDt:targetDt}    
    ]
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
                                <td>{todo.desc}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDt.toDateString()}</td>
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