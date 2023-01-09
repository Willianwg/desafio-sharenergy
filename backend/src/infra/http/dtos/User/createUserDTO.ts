import { ApiProperty } from "@nestjs/swagger/dist";
import { IsNotEmpty, MinLength, } from "class-validator";

export class CreateUserDTO {
    @ApiProperty()
    @IsNotEmpty()
    @MinLength(5)
    username: string;

    @ApiProperty()
    @IsNotEmpty()
    @MinLength(5)
    password: string;
}

class User {
    @ApiProperty()
    username: string;
    @ApiProperty()
    id: string;
}

export class AuthUserResponse {
    @ApiProperty()
    user: User;
}
