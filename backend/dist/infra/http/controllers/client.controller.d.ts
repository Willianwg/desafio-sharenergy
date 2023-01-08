import { CreateClient } from 'src/application/useCases/Client/createClient';
import { DeleteClient } from 'src/application/useCases/Client/deleteClient';
import { GetAllClients } from 'src/application/useCases/Client/getAllClients';
import { GetClientDetails } from 'src/application/useCases/Client/getClientDetails';
import { UpdateClient } from 'src/application/useCases/Client/updateClient';
import { CreateClientDTO } from '../dtos/Client/createClientDTO';
import { UpdateClientDTO } from '../dtos/Client/updateClientDTO';
export declare class ClientController {
    private readonly createClient;
    private readonly updateClient;
    private readonly deleteClient;
    private readonly getClientDetails;
    private readonly getAllClients;
    constructor(createClient: CreateClient, updateClient: UpdateClient, deleteClient: DeleteClient, getClientDetails: GetClientDetails, getAllClients: GetAllClients);
    getClient(id: string): Promise<{
        client: {
            id: string;
            name: string;
            email: string;
            phone: string;
            document: string;
            address: string;
        };
    }>;
    getAll(): Promise<{
        clients: {
            id: string;
            name: string;
            email: string;
            phone: string;
            document: string;
            address: string;
        }[];
    }>;
    create(client: CreateClientDTO): Promise<void>;
    update(updatedClientData: UpdateClientDTO, clientId: string): Promise<void>;
    delete(clientId: string): Promise<void>;
}
