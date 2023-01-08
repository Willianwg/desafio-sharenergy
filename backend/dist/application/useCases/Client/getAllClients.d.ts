import { ClientRepository } from "../../repositories/clientRepository";
import { Client } from "../../entities/Client";
type GetAllClientsResponse = {
    clients: Client[];
};
export declare class GetAllClients {
    private clientRepository;
    constructor(clientRepository: ClientRepository);
    execute(): Promise<GetAllClientsResponse>;
}
export {};
