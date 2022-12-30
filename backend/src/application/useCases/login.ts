import { User } from "../entities/User";
import { PasswordAuth } from "../helpers/passwordAuth";
import { UserRepository } from "../repositories/userRepository";
import { InvalidPassword } from "./errors/InvalidPassword";
import { UserNotFound } from "./errors/userNotFound";

type LoginRequest = {
    username: string;
    password: string;
}

type LoginResponse = {
    user: User;
}

export class Login {
    constructor( private userRepository: UserRepository){}

    async execute(request: LoginRequest): Promise<LoginResponse> {
        const user = await this.userRepository.findByUsername(request.username);

        if(!user){
            throw new UserNotFound();
        }

        const isPasswordValid = await PasswordAuth.compare(request.password, user.password);

        if(!isPasswordValid){
            throw new InvalidPassword();
        }

        return {
            user
        }
    }
}