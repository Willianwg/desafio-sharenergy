import { Client, ClientProps } from "../../src/application/entities/Client";

type OverrideyProps = Partial<ClientProps>;

export function makeClient(id: string, override: OverrideyProps = {}, ) {
    return new Client({
        name: "example name",
        email: "example@email.com",
        document: "123456",
        phone: "(11) 4002-8922",
        address: "Av. do Contorno, 2905, Santa Efigênia, Belo Horizonte – MG",
        ...override
    }, id)
};