import { makeClient } from "../../../../test/factories/ClientFactory";
import { inMemoryClientRepository } from "../../../../test/repositories/inMemory/clientRepository";
import { UserNotFound } from "../errors/userNotFound";
import { UpdateClient } from "./updateClient";

describe("Update Client", () => {
    it("should be able to Update a Client", async () => {
        const clientRepository = new inMemoryClientRepository();
        const updateClient = new UpdateClient(clientRepository);

        const client = makeClient("test-id");
        await clientRepository.create(client);

        await updateClient.execute({
            clientId: client.id,
            email: "updated.email@example.com",
        });

        expect(clientRepository.clients[0].email).toEqual("updated.email@example.com");
        expect(clientRepository.clients[0].document).toEqual(client.document);
        expect(clientRepository.clients[0].name).toEqual(client.name);
        expect(clientRepository.clients[0].phone).toEqual(client.phone);
        expect(clientRepository.clients[0].id).toEqual(client.id);
        expect(clientRepository.clients[0].address).toEqual(client.address);
        
    })

    it("should not be able to update a Client", async () => {
        const clientRepository = new inMemoryClientRepository();
        const updateClient = new UpdateClient(clientRepository);

        const client = makeClient("test-id");
        await clientRepository.create(client);

        expect(() => updateClient.execute({ clientId: "wrong-id", email: "random@example.com" })).rejects.toThrow(UserNotFound);
        expect(clientRepository.clients[0].email).toEqual("example@email.com");
    })
})