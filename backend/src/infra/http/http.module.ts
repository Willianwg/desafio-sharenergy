import { Module } from "@nestjs/common";
import { CreateClient } from "src/application/useCases/Client/createClient";
import { DeleteClient } from "src/application/useCases/Client/deleteClient";
import { UpdateClient } from "src/application/useCases/Client/updateClient";
import { Login } from "src/application/useCases/Login/login";
import { CreateUser } from "src/application/useCases/User/createUser";
import { DatabaseModule } from "../database/database.module";
import { ClientController } from "./controllers/client.controller";
import { UserController } from "./controllers/user.controller";

@Module({
    imports: [DatabaseModule],
    controllers: [ClientController, UserController],
    providers: [
        CreateClient,
        UpdateClient,
        DeleteClient,
        CreateUser,
        Login
    ],
})
export class HttpModule { }