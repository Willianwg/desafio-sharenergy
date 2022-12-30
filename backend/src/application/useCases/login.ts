import { User } from "../entities/User";
import { PasswordAuth } from "../helpers/passwordAuth";
import { UserRepository } from "../repositories/userRepository";

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
            throw new Error("User doesn't exists.");
        }

        const isPasswordValid = await PasswordAuth.compare(request.password, user.password);

        if(!isPasswordValid){
            throw new Error("Invalid password.");
        }

        return {
            user
        }
    }
}