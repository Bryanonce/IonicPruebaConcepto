import { AuthActionInterface } from "../models/AuthModel"
import { AuthTypes } from "../types/AuthTypes"

export const authReducer = (state = {}, action: AuthActionInterface) => {
    
    switch (action.type) {
        
        case AuthTypes.login:
            return {
                ...state,
                email: action.payload.email,
                nombre: action.payload.nombre,
                id: action.payload.id,
                token: action.payload.token
            };

        case AuthTypes.logout:
            return {};

        default:
            return state;

    }
    
}
