import { requestAuth } from "./requests/auth";
import { requestCreateClient } from "./requests/createClient";
import { requestDeleteClient } from "./requests/deleteClient";
import { requestEditClient } from "./requests/editClient";
import { requestGetClients } from "./requests/getClients";
import { requestLogin } from "./requests/login";

type LoginResponse = {
    access_token: string;
}

type AuthenticationResponse = {
    user: {
        username: string;
        id: string;
    }
}

export type ClientProps = {
    name: string;
    email: string;
    phone: string;
    document: string;
    address: string;
}


export const useApi = () => ({
    baseUrl: "http://localhost:3000",

    async login(username: string, password: string): Promise<LoginResponse> {
        const { access_token } = await requestLogin({
            username,
            password,
            baseUrl: this.baseUrl
        })

        return {
            access_token,
        }
    },

    async authenticate(access_token: string): Promise<AuthenticationResponse> {
        const { user } = await requestAuth({
            access_token,
            baseUrl: this.baseUrl,
        });

        return {
            user,
        }
    },

    async getClients() {
        const { clients } = await requestGetClients({ baseUrl: this.baseUrl });
        return {
            clients,
        }
    },

    async createClient(newClient: ClientProps){
       const response = await requestCreateClient({
            baseUrl: this.baseUrl,
            newClient
        });

        return response;
    },

    async editClient(newClient: ClientProps, clientId: string){
        const response = await requestEditClient({
             baseUrl: this.baseUrl,
             clientId,
             newClient
         });
 
         return response;
     },

    async deleteClient(clientId: string){
        await requestDeleteClient({
            baseUrl: this.baseUrl,
            clientId
        });
    }
})