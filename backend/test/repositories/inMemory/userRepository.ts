import { User } from "src/application/entities/User";
import { UserRepository } from "src/application/repositories/userRepository";


export class inMemoryUserRepository implements UserRepository {
    public users: User[] = [];

    async create(user: User): Promise<void>{
        this.users.push(user);
    }
}