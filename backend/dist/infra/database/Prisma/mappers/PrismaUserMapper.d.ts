import { User } from "src/application/entities/User";
import { User as RawUser } from "@prisma/client";
export declare class PrismaUserMapper {
    static toPrisma(user: User): {
        id: string;
        username: string;
        password: string;
    };
    static toDomain(raw: RawUser): User;
}
