import { UserDAO } from "../application/Interfaces";

export class User {
    username
    email
    avatar
    constructor(data: UserDAO){
        this.username = data.username
        this.email = data.email
        this.avatar = data.avartar
    }

}