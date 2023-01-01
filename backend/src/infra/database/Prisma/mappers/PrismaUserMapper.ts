import { User } from "src/application/entities/User";
import { User as RawUser } from "@prisma/client";

export class PrismaUserMapper {
    static toPrisma(user: User){
        return {
            id: user.id,
            username: user.username,
            password: user.password,
        }
    }

    static toDomain(raw: RawUser){
        const id = raw.id;

        return new User ({
            username: raw.username,
            password: raw.password,
        }, id);
    }
}