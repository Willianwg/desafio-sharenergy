import { Client } from "src/application/entities/Client";
export declare function httpClientMapper(client: Client): {
    id: string;
    name: string;
    email: string;
    phone: string;
    document: string;
    address: string;
};
