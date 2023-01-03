import { Body, Controller, Delete, Get, Post, Put, NotFoundException, Param } from '@nestjs/common';
import { CreateClient } from 'src/application/useCases/Client/createClient';
import { DeleteClient } from 'src/application/useCases/Client/deleteClient';
import { GetAllClients } from 'src/application/useCases/Client/getAllClients';
import { GetClientDetails } from 'src/application/useCases/Client/getClientDetails';
import { UpdateClient } from 'src/application/useCases/Client/updateClient';
import { CreateClientDTO } from '../dtos/Client/createClientDTO';
import { DeleteClientDTO } from '../dtos/Client/deleteClientDTO';
import { UpdateClientDTO } from '../dtos/Client/updateClientDTO';

@Controller("clients")
export class ClientController {
    constructor(
        private readonly createClient: CreateClient,
        private readonly updateClient: UpdateClient,
        private readonly deleteClient: DeleteClient,
        private readonly getClientDetails: GetClientDetails,
        private readonly getAllClients: GetAllClients,
    ) { }

    @Get(":id")
    async getClient(@Param("id") id: string) {
        try {
            const { client } = await this.getClientDetails.execute({ clientId: id });

            return {
                client
            }
        } catch {
            throw new NotFoundException();
        }
    }

    @Get()
    async getAll() {
        const { clients } = await this.getAllClients.execute();

        return {
            clients,
        }
    }

    @Post("create")
    async create(@Body() client: CreateClientDTO) {
        await this.createClient.execute(client);
    }

    @Put(":id/update")
    async update(@Body() updatedClientData: UpdateClientDTO, @Param("id") clientId: string) {
        await this.updateClient.execute({ ...updatedClientData, clientId });

    }

    @Delete(":id/delete")
    async delete(@Param("id") clientId: string) {
        try {
            await this.deleteClient.execute({ clientId });
        } catch {
            throw new NotFoundException();
        }
    }
}
