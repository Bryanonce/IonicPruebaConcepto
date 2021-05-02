import axios from 'axios'

export const getService = (inn_Url:string)=>{
    const data = axios.get(inn_Url)
    return data;
}

export const postService = (inn_Url:string, inn_Trama:any)=>{
    const data = axios.post(inn_Url,inn_Trama);
    return data;
}

export const putService = (inn_Url:string, inn_Trama:any)=>{
    const data = axios.put(inn_Url, inn_Trama);
    return data
}

export const deleteService = (inn_Url:string)=>{
    const data = axios.delete(inn_Url);
    return data;
}