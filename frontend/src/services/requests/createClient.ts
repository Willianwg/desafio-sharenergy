type ClientProps = {
    name: string;
    email: string;
    phone: string;
    document: string;
    address: string;
}
export async function requestCreateClient({ baseUrl, newClient }: { baseUrl: string, newClient: ClientProps }) {
   const response =  await fetch(baseUrl + "/clients/create", {
        method: "POST",
        body: JSON.stringify(newClient),
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        }
    });

    return response;
}