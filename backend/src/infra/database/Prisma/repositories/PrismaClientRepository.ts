import { Injectable } from "@nestjs/common/decorators";
import { Client } from "src/application/entities/Client";
import { ClientRepository } from "src/application/repositories/clientRepository";
import { PrismaClientMapper } from "../mappers/PrismaClientMapper";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaClientRepository implements ClientRepository {
    constructor(private prismaService: PrismaService) { }

    async findAllClients(): Promise<Client[]> {
        const clients = await this.prismaService.client.findMany();
        return clients.map(PrismaClientMapper.toDomain);
    }
    async create(client: Client): Promise<void> {
        const mappedClient = PrismaClientMapper.toPrisma(client);

        await this.prismaService.client.create({
            data: mappedClient,
        })
    }

    async deleteClientById(clientId: string): Promise<void> {
        await this.prismaService.client.delete({
            where:{
                id: clientId
            }
        })
    }

    async findClientById(clientId: string): Promise<Client | null> {
        const client = await this.prismaService.client.findFirst({
            where:{
                id: clientId
            }
        })

        if (!client) {
            return null;
        }

        return PrismaClientMapper.toDomain(client);
    }

    async updateClient(client: Client): Promise<void> {
        const mappedClient = PrismaClientMapper.toPrisma(client);
        const { id } = mappedClient;

        delete mappedClient.id;

        await this.prismaService.client.update({
            where:{
                id,
            },
            data: mappedClient
        });
    }

}