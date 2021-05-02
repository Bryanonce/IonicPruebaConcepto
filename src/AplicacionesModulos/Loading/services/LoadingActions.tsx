import { LoadingActionInterface } from "../models/LoadingModel"
import { LoadingTypes } from "../types/LoadingTypes"

const changeLoading = (isLoading:boolean)=>{
    return (dispatch: ({ type, payload }:LoadingActionInterface)=>void)=>{
        dispatch({
            type: LoadingTypes.setIsLoading,
            payload: {
                isLoading
            }
        })
    }
}

export const startLoading = ()=>{
    return changeLoading(true)
}

export const stopLoading = ()=>{
    return changeLoading(false)
}