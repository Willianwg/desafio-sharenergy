import { randomUUID } from "node:crypto";
import { User } from "../../entities/User";
import { UserRepository } from "../../repositories/userRepository";
import { Injectable } from "@nestjs/common";
import { PasswordAuth } from "../../helpers/passwordAuth";

type CreateUserRequest ={
    username: string;
    password: string;
}

type CreateUserResponse ={
    user: User;
}

@Injectable()
export class CreateUser {
    constructor(private userRepository: UserRepository){}

    async execute(request: CreateUserRequest): Promise<CreateUserResponse> {

        const id = randomUUID();
        const encryptedPassword = await PasswordAuth.encrypt(request.password);
        const user = new User({
            username: request.username,
            password: encryptedPassword,
        }, id);

        await this.userRepository.create(user);

        return {
            user,
        }
    }
}