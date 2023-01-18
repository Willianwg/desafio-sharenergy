import { Module } from "@nestjs/common";
import { ClientRepository } from "src/application/repositories/clientRepository";
import { UserRepository } from "src/application/repositories/userRepository";
import { PrismaService } from "./Prisma/prisma.service";
import { PrismaClientRepository } from "./Prisma/repositories/PrismaClientRepository";
import { PrismaUserRepository } from "./Prisma/repositories/PrismaUserRepository";

@Module({
    providers: [
        PrismaService,
        {
            provide: ClientRepository,
            useClass: PrismaClientRepository
        },
        {
            provide: UserRepository,
            useClass: PrismaUserRepository
        },
    ],
    exports: [ClientRepository, UserRepository],
})

export class DatabaseModule { }