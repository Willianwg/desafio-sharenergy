import { Client } from "src/application/entities/Client";

export function httpClientMapper(client: Client){
    return {
        id: client.id,
        name: client.name,
        email: client.email,
        phone: client.phone,
        document: client.document,
        address: client.address
    }
}