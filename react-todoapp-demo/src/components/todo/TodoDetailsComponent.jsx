import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAuth } from "./security/AuthContext"
import { retrieveTodoAPI } from "./api/TodosAPIService"
import {Field, Form, Formik} from "formik"

export default function TodosDetailsComponent(){

    const authCtx = useAuth()
    //const [todo, setTodo] = useState('')

    const [desc, setDesc] = useState('')
    const [targetDt, setTargetDt] = useState('')

    const user = authCtx.user
    const {id} = useParams()

    useEffect( ()=>retrieveTodo(),[id] )
    
    function retrieveTodo(){
        console.log("inside TodoDetailsComponent.retrieveTodo()")
        retrieveTodoAPI(user, id)
        // .then(response=> console.log(response.data))
        // .catch(error=> console.log(error))
        .then(
                (response) => {
                    setDesc(response.data.description)
                    setTargetDt(response.data.targetDate)
                }
            )
            .catch(
                (error) => console.log(error)
            )
            .finally(
            )    
    }
    
    function onSubmitHandler(values){
        console.log(values)
    }

    return(
        <div className="container">
            <h1>Todo Details</h1>
            <div>
                <Formik initialValues={{desc, targetDt}}
                    enableReinitialize={true}
                    onSubmit={onSubmitHandler}
                >
                {
                    (props) => (
                        <Form>
                            <fieldset className="form-group">
                                <label>Description</label>
                                <Field type="text" className="form-control" name="desc"/>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Target Date</label>
                                <Field type="date" className="form-control" name="targetDt"/>
                            </fieldset>
                            <div>
                                <button className="btn btn-success m-5" type="submit">Save</button>
                            </div>
                        </Form>
                    )
                }
                </Formik>


            {/* {todo.id}|
            |
            {todo.targetDate.toString()} */}
            {/* user={user} */}

            </div>
            {/* <h1>Todo Details</h1>
            <form:form method="post" modelAttribute="todo">
                <Fieldset class="mb-3">
                    <form:label path="description">Description</form:label>
                    <form:input type="text" path="description" class="form-control"
                        required="required" />
                    <form:errors path="description" cssClass="text-warning" />
                </Fieldset>
        
                <Fieldset class="mb-3">
                    <form:label path="targetDate">Target Date</form:label>
                    <form:input path="targetDate" class="form-control"
                        required="required" />
                    <form:errors path="targetDate" cssClass="text-warning" />
                </Fieldset>
        
                <form:input type="hidden" path="id" />
                <form:input type="hidden" path="username" />
                <form:input type="hidden" path="done" />
                <input type="submit" class="btn btn-success" value="Save"/>
        
            </form:form> */}
        </div>
        )
}

