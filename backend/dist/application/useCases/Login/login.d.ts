import { User } from "../../entities/User";
import { UserRepository } from "../../repositories/userRepository";
type LoginRequest = {
    username: string;
    password: string;
};
type LoginResponse = {
    user: User;
};
export declare class Login {
    private userRepository;
    constructor(userRepository: UserRepository);
    execute(request: LoginRequest): Promise<LoginResponse>;
}
export {};
