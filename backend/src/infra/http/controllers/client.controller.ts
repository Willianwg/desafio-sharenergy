import { Body, Controller, Delete, Get, Headers, Post, Put } from '@nestjs/common';
import { CreateClient } from 'src/application/useCases/Client/createClient';
import { DeleteClient } from 'src/application/useCases/Client/deleteClient';
import { UpdateClient } from 'src/application/useCases/Client/updateClient';
import { CreateClientDTO } from '../dtos/Client/createClientDTO';
import { UpdateClientDTO } from '../dtos/Client/updateClientDTO';

@Controller("client")
export class AppController {
    constructor(
        private readonly createClient: CreateClient,
        private readonly updateClient: UpdateClient,
        private readonly deleteClient: DeleteClient,
    ) { }

    @Post()
    async create(@Body() client: CreateClientDTO) {
        await this.createClient.execute(client);
    }

    @Put()
    async update(@Body() updatedClientData: UpdateClientDTO, @Headers("id") clientId: string) {
        await this.updateClient.execute({ ...updatedClientData, clientId });
    }

    @Delete()
    async delete(@Headers("id") clientId: string) {
        await this.deleteClient.execute({ clientId });
    }
}
