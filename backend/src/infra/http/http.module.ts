import { Module } from "@nestjs/common";
import { CreateClient } from "src/application/useCases/Client/createClient";
import { DeleteClient } from "src/application/useCases/Client/deleteClient";
import { UpdateClient } from "src/application/useCases/Client/updateClient";
import { Login } from "src/application/useCases/Login/login";
import { CreateUser } from "src/application/useCases/User/createUser";
import { AuthService } from "src/auth/auth.service";
import { DatabaseModule } from "../database/database.module";
import { ClientController } from "./controllers/client.controller";
import { UserController } from "./controllers/user.controller";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "src/auth/constants";
import { JwtStrategy } from "src/auth/jwt.strategy";
import { GetAllClients } from "src/application/useCases/Client/getAllClients";
import { GetClientDetails } from "src/application/useCases/Client/getClientDetails";

@Module({
    imports: [DatabaseModule, JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: {
            expiresIn: "15d"
        }
    })],
    controllers: [ClientController, UserController],
    providers: [
        GetAllClients,
        GetClientDetails,
        CreateClient,
        UpdateClient,
        DeleteClient,
        CreateUser,
        Login,
        AuthService,
        JwtStrategy
    ],
})
export class HttpModule { }