import { Injectable } from "@nestjs/common";
import { ClientRepository } from "../../repositories/clientRepository";
import { UserNotFound } from "../errors/userNotFound";

type UpdateClientRequest ={
    clientId: string
    name?: string;
    email?: string;
    phone?: string;
    document?: string;
    address?: string;
}

@Injectable()
export class UpdateClient {
    constructor(private clientRepository: ClientRepository){}

    async execute(request: UpdateClientRequest): Promise<void> {

        const client = await this.clientRepository.findClientById(request.clientId);

        if (!client) throw new UserNotFound();

        delete request.clientId;
        client.update({
            ...request
        });

        await this.clientRepository.updateClient(client);

    }
}