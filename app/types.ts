export interface oakContext {
    response: any
    request?: any
    params?: any
}

export interface User {
    id: string
    name: string
    email: string
}