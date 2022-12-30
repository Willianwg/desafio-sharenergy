import { Client } from "../entities/Client";

export abstract class ClientRepository {
    abstract create(client: Client): Promise<void>;
}