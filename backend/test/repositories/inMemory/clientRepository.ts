import { Client } from "src/application/entities/Client";
import { ClientRepository } from "src/application/repositories/clientRepository";


export class inMemoryClientRepository implements ClientRepository {
    
    public clients: Client[] = [];

    async findAllClients(): Promise<Client[]> {
        return this.clients;
    }

    async updateClient(client: Client): Promise<void> {
        const clientIndex = this.clients.findIndex(item => item.id === client.id);

        this.clients[clientIndex] = client;
    }

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