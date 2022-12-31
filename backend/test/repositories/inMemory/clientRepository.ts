import { Client } from "src/application/entities/Client";
import { ClientRepository } from "src/application/repositories/clientRepository";


export class inMemoryClientRepository implements ClientRepository {
    public Clients: Client[] = [];

    async create(Client: Client): Promise<void>{
        this.Clients.push(Client);
    }

    async findByClientname(name: string): Promise<Client | null> {
        const client = this.Clients.find(item => item.name === name);

        return client ? client : null;
    }
}