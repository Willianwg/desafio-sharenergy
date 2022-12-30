import { User } from "../entities/User";
import { UserRepository } from "../repositories/userRepository";

type CreateUserRequest ={
    username: string;
    password: string;
}

type CreateUserResponse ={
    user: User;
}

export class CreateUser {
    constructor(private userRepository: UserRepository){}

    async execute(request: CreateUserRequest): Promise<CreateUserResponse> {

        const user = new User(request);

        await this.userRepository.create(user);

        return {
            user,
        }
    }
}