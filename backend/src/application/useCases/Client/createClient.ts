import { Client } from "../../entities/Client";
import { ClientRepository } from "../../repositories/clientRepository";
import { randomUUID } from "node:crypto";
import { Injectable } from "@nestjs/common";

type CreateClientRequest ={
    name: string;
    email: string;
    phone: string;
    document: string;
    address: string;
}

type CreateClientResponse ={
    client: Client;
}

@Injectable()
export class CreateClient {
    constructor(private clientRepository: ClientRepository){}

    async execute(request: CreateClientRequest): Promise<CreateClientResponse> {

        const id = randomUUID();
        const client = new Client(request, id);

        await this.clientRepository.create(client);

        return {
            client,
        }
    }
}