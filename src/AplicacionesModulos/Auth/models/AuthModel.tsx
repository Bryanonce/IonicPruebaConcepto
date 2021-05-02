interface AuthPayload {
    email: string,
    nombre: string,
    id: string,
    token: string
}

export interface AuthForm {
    email: string, 
    password: string
}

export interface AuthActionInterface {
    type: string,
    payload: AuthPayload
}