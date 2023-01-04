
type RequestProps = {
    username: string;
    password: string;
    baseUrl: string;
}

export async function requestLogin(requestProps: RequestProps) {
    const response = await (await fetch(requestProps.baseUrl + "/user/login", {
        method: "POST",
        body: JSON.stringify({
            username: requestProps.username,
            password: requestProps.password,
        }),
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        }
    })).json();

    return response;
}