import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateClientDTO {
    @ApiProperty()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    phone: string;

    @ApiProperty()
    @IsNotEmpty()
    document: string;

    @ApiProperty()
    @IsNotEmpty()
    address: string;
}


class Client {
    @ApiProperty()
    id: string;
    @ApiProperty({})
    name: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    phone: string;
    @ApiProperty()
    document: string;
    @ApiProperty()
    address: string;
};


export class GetClientResponse {
    @ApiProperty()
    client: Client;
}

export class GetAllClientsResponse {
    @ApiProperty({ type: [Client]})
    clients: Client[];
}