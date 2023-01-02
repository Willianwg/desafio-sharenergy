import { Injectable } from "@nestjs/common/decorators";
import { User } from "src/application/entities/User";
import { UserRepository } from "src/application/repositories/userRepository";
import { PrismaUserMapper } from "../mappers/PrismaUserMapper";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaUserRepository implements UserRepository {
    constructor(private prismaService: PrismaService) { }

    async create(user: User): Promise<void> {
        const mappedUser = PrismaUserMapper.toPrisma(user);

        await this.prismaService.user.create({
            data: mappedUser,
        })
    }

    async findByUsername(username: string): Promise<User | null> {
        const user = await this.prismaService.user.findFirst({
            where: {
                username
            }
        })

        if (!user) {
            return null;
        }

        return PrismaUserMapper.toDomain(user);
    }

}