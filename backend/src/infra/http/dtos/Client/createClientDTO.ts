import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateClientDTO {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    phone: string;

    @IsNotEmpty()
    document: string;

    @IsNotEmpty()
    address: string;
}