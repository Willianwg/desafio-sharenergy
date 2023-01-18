"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpModule = void 0;
const common_1 = require("@nestjs/common");
const createClient_1 = require("../../application/useCases/Client/createClient");
const deleteClient_1 = require("../../application/useCases/Client/deleteClient");
const updateClient_1 = require("../../application/useCases/Client/updateClient");
const login_1 = require("../../application/useCases/Login/login");
const createUser_1 = require("../../application/useCases/User/createUser");
const auth_service_1 = require("../../auth/auth.service");
const database_module_1 = require("../database/database.module");
const client_controller_1 = require("./controllers/client.controller");
const user_controller_1 = require("./controllers/user.controller");
const jwt_1 = require("@nestjs/jwt");
const constants_1 = require("../../auth/constants");
const jwt_strategy_1 = require("../../auth/jwt.strategy");
const getAllClients_1 = require("../../application/useCases/Client/getAllClients");
const getClientDetails_1 = require("../../application/useCases/Client/getClientDetails");
let HttpModule = class HttpModule {
};
HttpModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret,
                signOptions: {
                    expiresIn: "15d"
                }
            })],
        controllers: [client_controller_1.ClientController, user_controller_1.UserController],
        providers: [
            getAllClients_1.GetAllClients,
            getClientDetails_1.GetClientDetails,
            createClient_1.CreateClient,
            updateClient_1.UpdateClient,
            deleteClient_1.DeleteClient,
            createUser_1.CreateUser,
            login_1.Login,
            auth_service_1.AuthService,
            jwt_strategy_1.JwtStrategy
        ],
    })
], HttpModule);
exports.HttpModule = HttpModule;
//# sourceMappingURL=http.module.js.map