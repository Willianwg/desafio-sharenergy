import { Client } from "src/application/entities/Client";
import { ClientRepository } from "src/application/repositories/clientRepository";
import { PrismaClientMapper } from "../mappers/PrismaClientMapper";
import { PrismaService } from "../prisma.service";

export class PrismaClientRepository implements ClientRepository {
    constructor(private prismaService: PrismaService) { }

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

    async findClientById(clientId: string): Promise<Client> {
        const client = await this.prismaService.client.findFirst({
            where:{
                id: clientId
            }
        })

        return PrismaClientMapper.toDomain(client);
    }

    async updateClient(client: Client): Promise<void> {
        const mappedClient = PrismaClientMapper.toPrisma(client);

        await this.prismaService.client.update({
            where:{
                id: mappedClient.id,
            },
            data: mappedClient
        });
    }

}