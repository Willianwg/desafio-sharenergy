import { Injectable } from "@nestjs/common";
import { ClientRepository } from "../../repositories/clientRepository";
import { Client } from "../../entities/Client";

type GetAllClientsResponse = {
    clients: Client[]
}

@Injectable()
export class GetAllClients {
    constructor(private clientRepository: ClientRepository) { }

    async execute(): Promise<GetAllClientsResponse> {

        const clients = await this.clientRepository.findAllClients();

        return {
            clients,
        }
    }
}