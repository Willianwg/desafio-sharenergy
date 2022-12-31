import { inMemoryClientRepository } from "../../../../test/repositories/inMemory/clientRepository";
import { CreateClient } from "./createClient";

describe("Create Client", ()=>{
    it("should be able to create an Client", async ()=>{
        const ClientRepository = new inMemoryClientRepository();
        const createClient = new CreateClient(ClientRepository);

        const { client } = await createClient.execute({
           name:"example name",
           email:"example@email.com",
           document:"123456",
           phone: "(11) 4002-8922",
           address: "Av. do Contorno, 2905, Santa Efigênia, Belo Horizonte – MG"
        })

        expect(client).toHaveProperty("id");
        expect(client).toBeTruthy();
    })
})