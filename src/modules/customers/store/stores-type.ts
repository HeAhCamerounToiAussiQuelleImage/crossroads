type Auth = {
    username:string,
    email:string
}

export type State = {
    token: string | null,
    auth:Auth | null,
    appHasBeenLoad:boolean
}