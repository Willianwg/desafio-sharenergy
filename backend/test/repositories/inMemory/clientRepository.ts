import { Client } from "src/application/entities/Client";
import { ClientRepository } from "src/application/repositories/clientRepository";


export class inMemoryClientRepository implements ClientRepository {
    public clients: Client[] = [];

    async deleteClientById(clientId: string): Promise<void> {
        const filteredClients = this.clients.filter(client => client.id !== clientId);

        this.clients = filteredClients;
    }

    async findClientById(clientId: string): Promise<Client | null> {
        const client = this.clients.find(client => client.id === clientId);

        return client? client : null
    }

    async create(Client: Client): Promise<void>{
        this.clients.push(Client);
    }

    async findByClientname(name: string): Promise<Client | null> {
        const client = this.clients.find(item => item.name === name);

        return client ? client : null;
    }
}