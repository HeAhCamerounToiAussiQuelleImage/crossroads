
export type UserInputCreateDAO = {
    username:string| null,
    email:string| null,
    password:string| null
}

export type UserInputLoginDAO = {
    email:string| null,
    password:string| null
} 

export type UserDAO = {
    username:string| null,
    email:string| null,
    avartar:string| null
}