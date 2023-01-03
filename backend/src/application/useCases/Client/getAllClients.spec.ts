import { makeClient } from "../../../../test/factories/ClientFactory";
import { inMemoryClientRepository } from "../../../../test/repositories/inMemory/clientRepository";
import { GetAllClients } from "./getAllClients";

describe("Get all Clients", () => {
    it("should be able to find all clients", async () => {
        const clientRepository = new inMemoryClientRepository();
        const getAllClients = new GetAllClients(clientRepository);

        const clientOne = makeClient("test-one");
        await clientRepository.create(clientOne);

        const clientTwo = makeClient("test-two");
        await clientRepository.create(clientTwo);

        const { clients } = await getAllClients.execute();

        expect(clients).toHaveLength(2);
        expect(clients).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ id: "test-one" }),
                expect.objectContaining({ id: "test-two" }),
            ])
        );
    })
})