import { makeClient } from "../../../../test/factories/ClientFactory";
import { inMemoryClientRepository } from "../../../../test/repositories/inMemory/clientRepository";
import { UserNotFound } from "../errors/userNotFound";
import { DeleteClient } from "./deleteClient";

describe("Delete Client", () => {
    it("should be able to delete a Client", async () => {
        const clientRepository = new inMemoryClientRepository();
        const deleteClient = new DeleteClient(clientRepository);

        const client = makeClient("test-id");
        await clientRepository.create(client);

        await deleteClient.execute({ clientId: client.id });

        expect(clientRepository.clients).toHaveLength(0);
    })

    it("should not be able to delete a Client", async () => {
        const clientRepository = new inMemoryClientRepository();
        const deleteClient = new DeleteClient(clientRepository);

        const client = makeClient("test-id");
        await clientRepository.create(client);

        expect(() => deleteClient.execute({ clientId: "wrong-id" })).rejects.toThrow(UserNotFound);
        expect(clientRepository.clients).toHaveLength(1);
    })
})