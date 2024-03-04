import axios from "axios";

// export function retrieveHWorldBean(user){
//     const urlPath = 'http://localhost:8082/hello/pathparam/' + user

//     //return Promise obj
//     return axios.get(urlPath,{withCredentials: true})
// }

const apiClient = axios.create(
    {
        baseURL:'http://localhost:8082'
    }
)

export const retrieveHWorldBean 
= (user) => apiClient.get(`/hello/pathparam/${user}`,{withCredentials: true})