import axios from "axios";

const apiClient = axios.create(
    {
        baseURL:'http://localhost:8082'
    }
)

export const retrieveTodosAPI 
= (user) => apiClient.get(`/users/${user}/todos`,{withCredentials: true})

export const deleteTodoAPI
= (user, id) => apiClient.delete(`/users/${user}/todos/${id}`,{withCredentials: true})