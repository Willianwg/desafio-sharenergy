import { Client } from "../entities/Client";
export declare abstract class ClientRepository {
    abstract create(client: Client): Promise<void>;
    abstract deleteClientById(clientId: string): Promise<void>;
    abstract findClientById(clientId: string): Promise<Client | null>;
    abstract updateClient(client: Client): Promise<void>;
    abstract findAllClients(): Promise<Client[]>;
}
