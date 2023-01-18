import { inMemoryClientRepository } from "../../../../test/repositories/inMemory/clientRepository";
import { CreateClient } from "./createClient";

describe("Create Client", () => {
    it("should be able to create a Client", async () => {
        const clientRepository = new inMemoryClientRepository();
        const createClient = new CreateClient(clientRepository);

        const { client } = await createClient.execute({
            name: "example name",
            email: "example@email.com",
            document: "123456",
            phone: "(11) 4002-8922",
            address: "Av. do Contorno, 2905, Santa Efigênia, Belo Horizonte – MG"
        })

        expect(client).toHaveProperty("id");
        expect(client).toBeTruthy();
        expect(clientRepository.clients).toHaveLength(1);
        expect(clientRepository.clients[0]).toEqual(
            expect.objectContaining({
                name: "example name",
                email: "example@email.com",
                document: "123456",
                phone: "(11) 4002-8922",
                address: "Av. do Contorno, 2905, Santa Efigênia, Belo Horizonte – MG"
            })
        );
    })
})