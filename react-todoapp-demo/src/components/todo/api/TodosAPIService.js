import axios from "axios";

const apiClient = axios.create(
    {
        baseURL:'http://localhost:8082'
    }
)

export const retrieveUserTodos 
= (user) => apiClient.get(`/users/${user}/todos`,{withCredentials: true})