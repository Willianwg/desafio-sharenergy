
type LoginResponse = {
    access_token: string;
}

type AuthenticationResponse = {
    user:{
        username: string;
        id: string;
    }
}


export const useApi = () => ({
    baseUrl: "http://localhost:3000",
    jsonContentType: {
        'Content-Type': 'application/json;charset=utf-8'
    },

    async login(username: string, password: string): Promise<LoginResponse> {
        const response : LoginResponse = await (await fetch(this.baseUrl + "/user/login", {
            method: "POST",
            body: JSON.stringify({
                username,
                password,
            }),
            headers: this.jsonContentType
        })).json();

        return {
            access_token: response.access_token,
        }
    },

    async authenticate(access_token: string): Promise<AuthenticationResponse> {
        const response : AuthenticationResponse = await (await fetch(this.baseUrl + "/user/auth", {
            headers:{
                ...this.jsonContentType,
                "Authorization": `Bearer ${access_token}`
            }
        })).json();

        return {
           user: response.user
        }
    }
})