import { User } from "../../entities/User";
import { UserRepository } from "../../repositories/userRepository";
type CreateUserRequest = {
    username: string;
    password: string;
};
type CreateUserResponse = {
    user: User;
};
export declare class CreateUser {
    private userRepository;
    constructor(userRepository: UserRepository);
    execute(request: CreateUserRequest): Promise<CreateUserResponse>;
}
export {};
