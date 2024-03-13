import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useAuth } from "./security/AuthContext"
import { createTodoAPI, retrieveTodoAPI, updateTodoAPI } from "./api/TodosAPIService"
import {ErrorMessage, Field, Form, Formik} from "formik"

export default function TodosDetailsComponent(){

    const authCtx = useAuth()

    const [desc, setDesc] = useState('')
    const [targetDt, setTargetDt] = useState('')

    const user = authCtx.user
    const {id} = useParams()

    const navigate = useNavigate()

    useEffect( ()=>retrieveTodo(),[id] )
    
    function retrieveTodo(){
        if (id){
            retrieveTodoAPI(user, id)
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
    }

  
    function onSubmit(values){
        console.log("inside onSubmit(): values:")
        console.log(values)

        const todo = {
            id: id,
            username: user,
            description: values.desc,
            targetDate: values.targetDt,
            done: false
        }
        console.log(todo)

        if (id){
            updateTodoAPI(user,id,todo)
            .then(
                response => {
                    console.log(response)
                    navigate('/todos')
                }
            )
            .catch(
                // error => {
                // console.log(error)
                // error.saveapi = 'ERROR: Cannot Save Todo.'
                // return error
                //}
            )
        } else {
            createTodoAPI(user, todo)
            .then(
                response => {
                    console.log(response)
                    navigate('/todos')
                }   
            )
            .catch(
                // error => {
                // console.log(error)
                // error.saveapi = 'ERROR: Cannot Save Todo.'
                // return error
                //}
            )
        }
    }

    function validate(values){
        console.log("inside validate()")

        let errors = { }

        if (values.desc.length<10) {
            errors.desc = 'Enter at least 10 characters'
        }
        return errors
    }

    return(
        <div className="container">
            <h1>Todo Details</h1>
            <div>
                <Formik initialValues={{desc, targetDt}}
                    enableReinitialize={true}
                    onSubmit={onSubmit}
                    validate={validate}
                    validateOnChange={false}
                    validateOnBlur={false}
                >
                {
                    (props) => (
                        <Form>
                            <ErrorMessage
                                name="desc"
                                component="div"
                                className="alert alert-warning"
                            />
                            <ErrorMessage
                                name="targetDt"
                                component="div"
                                className="alert alert-warning"
                            />

                            <ErrorMessage
                                name="saveapi"
                                component="div"
                                className="alert alert-warning"
                            />

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
            </div>
        </div>
    )
}

