import { ClientRepository } from "../../repositories/clientRepository";
type UpdateClientRequest = {
    clientId: string;
    name?: string;
    email?: string;
    phone?: string;
    document?: string;
    address?: string;
};
export declare class UpdateClient {
    private clientRepository;
    constructor(clientRepository: ClientRepository);
    execute(request: UpdateClientRequest): Promise<void>;
}
export {};
