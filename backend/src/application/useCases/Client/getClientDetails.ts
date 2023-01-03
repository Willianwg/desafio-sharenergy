import { Injectable } from "@nestjs/common";
import { Client } from "../../entities/Client";
import { ClientRepository } from "../../repositories/clientRepository";
import { UserNotFound } from "../errors/userNotFound";

type GetClientDetailsRequest ={
   clientId: string;
}

type GetClientDetailsResponse ={
    client: Client;
 }

@Injectable()
export class GetClientDetails {
    constructor(private clientRepository: ClientRepository){}

    async execute(request: GetClientDetailsRequest): Promise<GetClientDetailsResponse> {
        const { clientId } = request;

        const client = await this.clientRepository.findClientById(clientId);

        if (!client) throw new UserNotFound();
        
        return {
            client
        }
    }
}