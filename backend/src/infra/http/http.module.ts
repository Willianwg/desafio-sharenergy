import { Module } from "@nestjs/common";
import { CreateClient } from "src/application/useCases/Client/createClient";
import { DeleteClient } from "src/application/useCases/Client/deleteClient";
import { UpdateClient } from "src/application/useCases/Client/updateClient";
import { Login } from "src/application/useCases/Login/login";
import { CreateUser } from "src/application/useCases/User/createUser";
import { DatabaseModule } from "../database/database.module";

@Module({
    imports:[DatabaseModule],
    providers:[
        CreateUser,
        Login,
        CreateClient,
        DeleteClient,
        UpdateClient,
    ]
})
export class HttpModule {}