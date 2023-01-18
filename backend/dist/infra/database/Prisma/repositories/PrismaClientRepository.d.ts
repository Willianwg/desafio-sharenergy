import { Client } from "src/application/entities/Client";
import { ClientRepository } from "src/application/repositories/clientRepository";
import { PrismaService } from "../prisma.service";
export declare class PrismaClientRepository implements ClientRepository {
    private prismaService;
    constructor(prismaService: PrismaService);
    findAllClients(): Promise<Client[]>;
    create(client: Client): Promise<void>;
    deleteClientById(clientId: string): Promise<void>;
    findClientById(clientId: string): Promise<Client | null>;
    updateClient(client: Client): Promise<void>;
}
