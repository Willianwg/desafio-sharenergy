type RequestAuthProps = {
    access_token: string,
    baseUrl: string;
}

export async function requestAuth({ access_token, baseUrl}: RequestAuthProps) {
    const response = await(await fetch(baseUrl + "/user/auth", {
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            "Authorization": `Bearer ${access_token}`
        }
    })).json();

    return response;
}