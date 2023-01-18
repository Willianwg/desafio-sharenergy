import { makeClient } from "../../../../test/factories/ClientFactory";
import { inMemoryClientRepository } from "../../../../test/repositories/inMemory/clientRepository";
import { UserNotFound } from "../errors/userNotFound";
import { GetClientDetails } from "./GetClientDetails";

describe("Get client details", () => {
    it("should be able to find a client", async () => {
        const clientRepository = new inMemoryClientRepository();
        const getClientDetails = new GetClientDetails(clientRepository);

        const newClient = makeClient("test-id");
        await clientRepository.create(newClient);

        const { client } = await getClientDetails.execute({ clientId: "test-id" });

        expect(client).toEqual(
            expect.objectContaining({ id: "test-id" })
        );
        expect(client).toHaveProperty("name");
        expect(client).toHaveProperty("email");
        expect(client).toHaveProperty("phone");
        expect(client).toHaveProperty("document");
        expect(client).toHaveProperty("address");
    })

    it("should not be able to find a Client", async () => {
        const clientRepository = new inMemoryClientRepository();
        const getClientDetails = new GetClientDetails(clientRepository);

        const client = makeClient("test-id");
        await clientRepository.create(client);

        expect(() => getClientDetails.execute({ clientId: "wrong-id" })).rejects.toThrow(UserNotFound);
    })
})