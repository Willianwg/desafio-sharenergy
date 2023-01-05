type ClientProps = {
    name: string;
    email: string;
    phone: string;
    document: string;
    address: string;
}
export async function requestEditClient({ baseUrl, newClient, clientId }: { baseUrl: string, clientId: string, newClient: ClientProps }) {
   const response =  await fetch(baseUrl + "/clients/" + clientId  +"/update", {
        method: "PUT",
        body: JSON.stringify(newClient),
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        }
    });

    return response;
}