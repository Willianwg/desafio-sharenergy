import { Client } from "../../entities/Client";
import { ClientRepository } from "../../repositories/clientRepository";
type CreateClientRequest = {
    name: string;
    email: string;
    phone: string;
    document: string;
    address: string;
};
type CreateClientResponse = {
    client: Client;
};
export declare class CreateClient {
    private clientRepository;
    constructor(clientRepository: ClientRepository);
    execute(request: CreateClientRequest): Promise<CreateClientResponse>;
}
export {};
