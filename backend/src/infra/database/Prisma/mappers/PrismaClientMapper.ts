import { Client } from "src/application/entities/Client";
import { Client as RawClient } from "@prisma/client";

export class PrismaClientMapper {
    static toPrisma(client: Client){
        return {
            id: client.id,
            name: client.name,
            email: client.email,
            phone: client.phone,
            document: client.document,
            address: client.address,
        }
    }

    static toDomain(raw: RawClient){
        const id = raw.id;

        return new Client ({
            name: raw.name,
            email: raw.email,
            phone: raw.phone,
            document: raw.document,
            address: raw.address,
        }, id);
    }
}