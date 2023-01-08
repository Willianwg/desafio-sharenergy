import { Client } from "src/application/entities/Client";
import { Client as RawClient } from "@prisma/client";
export declare class PrismaClientMapper {
    static toPrisma(client: Client): {
        id: string;
        name: string;
        email: string;
        phone: string;
        document: string;
        address: string;
    };
    static toDomain(raw: RawClient): Client;
}
