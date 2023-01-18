import { Body, Controller, Delete, Get, Post, Put, NotFoundException, Param } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';
import { ApiResponse } from '@nestjs/swagger/dist/decorators/api-response.decorator';
import { CreateClient } from 'src/application/useCases/Client/createClient';
import { DeleteClient } from 'src/application/useCases/Client/deleteClient';
import { GetAllClients } from 'src/application/useCases/Client/getAllClients';
import { GetClientDetails } from 'src/application/useCases/Client/getClientDetails';
import { UpdateClient } from 'src/application/useCases/Client/updateClient';
import { CreateClientDTO, GetAllClientsResponse, GetClientResponse } from '../dtos/Client/createClientDTO';
import { UpdateClientDTO } from '../dtos/Client/updateClientDTO';
import { httpClientMapper } from '../mappers/httpClientMapper';


@Controller("clients")
export class ClientController {
    constructor(
        private readonly createClient: CreateClient,
        private readonly updateClient: UpdateClient,
        private readonly deleteClient: DeleteClient,
        private readonly getClientDetails: GetClientDetails,
        private readonly getAllClients: GetAllClients,
    ) { }

    @ApiResponse({ type: GetClientResponse })
    @Get(":id")
    async getClient(@Param("id") id: string) {
        try {
            const { client } = await this.getClientDetails.execute({ clientId: id });

            return {
                client: httpClientMapper(client),
            }
        } catch {
            throw new NotFoundException();
        }
    }

    @ApiResponse({ type: GetAllClientsResponse })
    @Get()
    async getAll() {
        const { clients } = await this.getAllClients.execute();

        return {
            clients: clients.map(httpClientMapper),
        }
    }

    @Post("create")
    async create(@Body() client: CreateClientDTO): Promise<void> {
        await this.createClient.execute(client);
    }

    @Put(":id/update")
    async update(@Body() updatedClientData: UpdateClientDTO, @Param("id") clientId: string): Promise<void> {
        await this.updateClient.execute({ ...updatedClientData, clientId });
    }

    @Delete(":id/delete")
    async delete(@Param("id") clientId: string): Promise<void> {
        try {
            await this.deleteClient.execute({ clientId });
        } catch {
            throw new NotFoundException();
        }
    }
}
