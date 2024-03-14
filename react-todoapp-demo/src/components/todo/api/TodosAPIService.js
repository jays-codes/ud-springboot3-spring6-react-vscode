import {apiClient} from './ApiClient';

export const retrieveTodosAPI 
= (user) => apiClient.get(`/users/${user}/todos`
,{withCredentials: true}
)

export const deleteTodoAPI
= (user, id) => apiClient.delete(`/users/${user}/todos/${id}`,{withCredentials: true})

export const retrieveTodoAPI
= (user, id) => apiClient.get(`/users/${user}/todos/${id}`
,{withCredentials: true}
)

export const updateTodoAPI
= (user, id, todo) => apiClient.put(`/users/${user}/todos/${id}`, todo, {withCredentials: true})

export const createTodoAPI
= (user, todo) => apiClient.post(`/users/${user}/todos`, todo, {withCredentials: true})

export const executeBasicAuthAPI
= (token) => apiClient.get(`/basicauth`,
{
    headers: {
        Authorization: token
    }
}
,{withCredentials: true}
)