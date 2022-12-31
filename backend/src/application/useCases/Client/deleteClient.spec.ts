import { inMemoryClientRepository } from "../../../../test/repositories/inMemory/clientRepository";
import { UserNotFound } from "../errors/userNotFound";
import { CreateClient } from "./createClient";
import { DeleteClient } from "./deleteClient";

describe("Delete Client", () => {
    it("should be able to delete a Client", async () => {
        const clientRepository = new inMemoryClientRepository();
        const createClient = new CreateClient(clientRepository);
        const deleteClient = new DeleteClient(clientRepository);

        const { client } = await createClient.execute({
            name: "example name",
            email: "example@email.com",
            document: "123456",
            phone: "(11) 4002-8922",
            address: "Av. do Contorno, 2905, Santa Efigênia, Belo Horizonte – MG"
        })

        await deleteClient.execute({ clientId: client.id });

        expect(clientRepository.clients).toHaveLength(0);
    })

    it("should not be able to delete a Client", async () => {
        const clientRepository = new inMemoryClientRepository();
        const createClient = new CreateClient(clientRepository);
        const deleteClient = new DeleteClient(clientRepository);

        await createClient.execute({
            name: "example name",
            email: "example@email.com",
            document: "123456",
            phone: "(11) 4002-8922",
            address: "Av. do Contorno, 2905, Santa Efigênia, Belo Horizonte – MG"
        })

        expect( ()=> deleteClient.execute({ clientId: "wrong-id" }) ).rejects.toThrow(UserNotFound);
        expect(clientRepository.clients).toHaveLength(1);
    })
})