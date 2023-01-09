import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateClientDTO {
    @ApiProperty()
    @IsNotEmpty()
    @MinLength(4)
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    @MinLength(10)
    phone: string;

    @ApiProperty()
    @IsNotEmpty()
    @MinLength(11)
    document: string;

    @ApiProperty()
    @IsNotEmpty()
    @MinLength(5)
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