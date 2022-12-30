import { User } from "src/application/entities/User";
import { UserRepository } from "src/application/repositories/userRepository";


export class inMemoryUserRepository implements UserRepository {
    public users: User[] = [];

    async create(user: User): Promise<void>{
        this.users.push(user);
    }

    async findByUsername(username: string): Promise<User | null> {
        const user = this.users.find(item => item.username === username);

        return user ? user : null;
    }
}