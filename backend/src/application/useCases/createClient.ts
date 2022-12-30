import { Client } from "../entities/Client";
import { ClientRepository } from "../repositories/clientRepository";

type CreateClientRequest ={
    name: string;
    email: string;
    number: string;
    document: string;
    address: string;
}

type CreateClientResponse ={
    client: Client;
}

export class CreateClient {
    constructor(private clientRepository: ClientRepository){}

    async execute(request: CreateClientRequest): Promise<CreateClientResponse> {

        const client = new Client(request);

        await this.clientRepository.create(client);

        return {
            client,
        }
    }
}