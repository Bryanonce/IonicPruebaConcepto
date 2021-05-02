import { LoadingActionInterface } from "../models/LoadingModel";
import { LoadingTypes } from "../types/LoadingTypes";

export const loadingReducer = (state = {isLoading: false}, action: LoadingActionInterface) => {
    switch(action.type){
        case LoadingTypes.setIsLoading:
            return {
                isLoading: action.payload.isLoading
            }
        default: 
            return state
    }
}
