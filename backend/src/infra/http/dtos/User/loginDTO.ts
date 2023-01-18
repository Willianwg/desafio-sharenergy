import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger/dist";

export class LoginDTO {
    @ApiProperty()
    @IsNotEmpty()
    username: string;

    @ApiProperty()
    @IsNotEmpty()
    password: string;
}

export class LoginResponse {
    @ApiProperty()
    access_token: string;
}
