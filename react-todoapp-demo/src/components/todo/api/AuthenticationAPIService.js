import {apiClient} from './ApiClient';

export const executeBasicAuthAPI
= (token) => apiClient.get(`/basicauth`,
{
    headers: {
        Authorization: token
    }
}
,{withCredentials: true}
)

export const executeJWTAuthAPI
= (username,password) => apiClient.post(`/authenticate`
,{username,password}
// ,{withCredentials: true}
)