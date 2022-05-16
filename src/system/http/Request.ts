import { GraphQLClient } from "graphql-request"


const graphql = new GraphQLClient(
    "https://api.github.com/graphql",
{
    headers: {
    }
});

class Request {
    graphql
    constructor(){
        this.graphql = new GraphQLClient("https://api.github.com/graphql");
    }

    addToken(token:string){
        const headers = {
            headers: {
                Authorization: `Bearer <PERSONAL_ACCESS_TOKEN>`
            }
        }
        this.graphql =  new GraphQLClient("https://api.github.com/graphql", headers);
    }
}


export default (function () {

    var instance: Request | null

    function createInstance(): Request | null {
        var object = new Request();
        return object;
    }

    return  () => {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        };
})();