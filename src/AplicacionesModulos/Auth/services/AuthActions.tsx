import { postService } from "../../../ServicioGenerico/CommonService";
import { AuthActionInterface, AuthForm } from "../models/AuthModel";
import jwt_decode from 'jwt-decode';
import { AuthTypes } from "../types/AuthTypes";

export const login = ({ email, password }:AuthForm)=>{

    const url:string = 'https://bryancedeno.herokuapp.com/users/login';

    return (dispatch:({type, payload}:AuthActionInterface)=>void)=>{
        postService(url,{email, password})
        .then(({data})=>{
            return data.data.token
        })
        .then((token)=>{
            const data:any = jwt_decode(token)
            dispatch({
                type: AuthTypes.login,
                payload: {
                    email: email,
                    nombre: data.name,
                    id: data._id,
                    token: token
                }
            })
        })
        .catch(()=>{
            console.log('No se pudo Conectar')
        })
    }
}