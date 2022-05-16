import { UserInputCreateDAO, UserInputLoginDAO } from "./Interfaces";

import http from "@/system/http/Request";

export default class UserRepository {
   client

   constructor(){
      this.client = http()
   }

   loginRequest(data:UserInputLoginDAO) {
       this.client?.graphql.request
   }

   registerRequest(data:UserInputCreateDAO){
       
   }
}