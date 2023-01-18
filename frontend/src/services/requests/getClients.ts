
type ClientProps = {
    name: string;
    email: string;
    phone: string;
    document: string;
    address: string;
    id: string;
}

type GetClientsResponse = {
    clients: ClientProps[];
}

export async function requestGetClients({ baseUrl }: { baseUrl: string }): Promise<GetClientsResponse> {
    const response : GetClientsResponse = await (await fetch(baseUrl + "/clients", {
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        }
    })).json();

    return response;
}