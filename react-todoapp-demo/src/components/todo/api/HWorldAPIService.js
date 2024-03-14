import { apiClient } from "./ApiClient";

export const retrieveHWorldBean 
= (user) => apiClient.get(`/hello/pathparam/${user}`,{withCredentials: true})

