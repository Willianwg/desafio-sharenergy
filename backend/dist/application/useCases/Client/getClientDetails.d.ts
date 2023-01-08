import { Client } from "../../entities/Client";
import { ClientRepository } from "../../repositories/clientRepository";
type GetClientDetailsRequest = {
    clientId: string;
};
type GetClientDetailsResponse = {
    client: Client;
};
export declare class GetClientDetails {
    private clientRepository;
    constructor(clientRepository: ClientRepository);
    execute(request: GetClientDetailsRequest): Promise<GetClientDetailsResponse>;
}
export {};
