import { requestAuth } from "./requests/auth";
import { requestDeleteClient } from "./requests/deleteClient";
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

    async deleteClient(clientId: string){
        await requestDeleteClient({
            baseUrl: this.baseUrl,
            clientId
        });
    }
})