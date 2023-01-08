import { ClientRepository } from "../../repositories/clientRepository";
type DeleteClientRequest = {
    clientId: string;
};
export declare class DeleteClient {
    private clientRepository;
    constructor(clientRepository: ClientRepository);
    execute(request: DeleteClientRequest): Promise<void>;
}
export {};
