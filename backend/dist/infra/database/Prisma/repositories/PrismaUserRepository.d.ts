import { User } from "src/application/entities/User";
import { UserRepository } from "src/application/repositories/userRepository";
import { PrismaService } from "../prisma.service";
export declare class PrismaUserRepository implements UserRepository {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(user: User): Promise<void>;
    findByUsername(username: string): Promise<User | null>;
}
