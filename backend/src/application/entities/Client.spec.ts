import { Client } from "./Client";

describe("Client", () => {
    it("should be able to create a Client", async () => {
        
        const client = new Client({
            name: "example name",
            email: "example@email.com",
            document: "123456",
            phone: "(11) 4002-8922",
            address: "Av. do Contorno, 2905, Santa Efigênia, Belo Horizonte – MG"
        }, "example-id");

        expect(client).toBeTruthy();
    })

    it("should be able to update a Client", async () => {

        const client =  new Client({
            name: "example name",
            email: "example@email.com",
            document: "123456",
            phone: "(11) 4002-8922",
            address: "Av. do Contorno, 2905, Santa Efigênia, Belo Horizonte – MG"
        }, "example-id");

        client.update({
            document: "00.00.00.-0",
            phone: "(00) 0000-0000",
            address: "Avenida Paulist - SP"
        })

        expect(client.document).toEqual("00.00.00.-0");
        expect(client.phone).toEqual("(00) 0000-0000");
        expect(client.address).toEqual("Avenida Paulist - SP");
    })
})