interface LoadingPayload {
    isLoading: boolean
}

export interface LoadingActionInterface {
    type: string,
    payload: LoadingPayload
}