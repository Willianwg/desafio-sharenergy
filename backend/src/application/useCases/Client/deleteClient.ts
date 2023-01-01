import { Injectable } from "@nestjs/common";
import { ClientRepository } from "../../repositories/clientRepository";
import { UserNotFound } from "../errors/userNotFound";

type DeleteClientRequest ={
   clientId: string;
}

@Injectable()
export class DeleteClient {
    constructor(private clientRepository: ClientRepository){}

    async execute(request: DeleteClientRequest): Promise<void> {
        const { clientId } = request;

        const client = await this.clientRepository.findClientById(clientId);

        if (!client) throw new UserNotFound();
        
        await this.clientRepository.deleteClientById(clientId);

    }
}