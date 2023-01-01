import { randomUUID } from "node:crypto";
import { User } from "../../entities/User";
import { UserRepository } from "../../repositories/userRepository";
import * as bcrypt from "bcryptjs";
import { Injectable } from "@nestjs/common";

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
        const encryptedPassword = await bcrypt.hash(request.password, 10);
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