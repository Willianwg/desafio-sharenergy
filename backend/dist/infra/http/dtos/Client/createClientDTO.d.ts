export declare class CreateClientDTO {
    name: string;
    email: string;
    phone: string;
    document: string;
    address: string;
}
declare class Client {
    id: string;
    name: string;
    email: string;
    phone: string;
    document: string;
    address: string;
}
export declare class GetClientResponse {
    client: Client;
}
export declare class GetAllClientsResponse {
    clients: Client[];
}
export {};
