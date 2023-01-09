"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientController = void 0;
const common_1 = require("@nestjs/common");
const api_response_decorator_1 = require("@nestjs/swagger/dist/decorators/api-response.decorator");
const createClient_1 = require("../../../application/useCases/Client/createClient");
const deleteClient_1 = require("../../../application/useCases/Client/deleteClient");
const getAllClients_1 = require("../../../application/useCases/Client/getAllClients");
const getClientDetails_1 = require("../../../application/useCases/Client/getClientDetails");
const updateClient_1 = require("../../../application/useCases/Client/updateClient");
const createClientDTO_1 = require("../dtos/Client/createClientDTO");
const updateClientDTO_1 = require("../dtos/Client/updateClientDTO");
const httpClientMapper_1 = require("../mappers/httpClientMapper");
let ClientController = class ClientController {
    constructor(createClient, updateClient, deleteClient, getClientDetails, getAllClients) {
        this.createClient = createClient;
        this.updateClient = updateClient;
        this.deleteClient = deleteClient;
        this.getClientDetails = getClientDetails;
        this.getAllClients = getAllClients;
    }
    async getClient(id) {
        try {
            const { client } = await this.getClientDetails.execute({ clientId: id });
            return {
                client: (0, httpClientMapper_1.httpClientMapper)(client),
            };
        }
        catch (_a) {
            throw new common_1.NotFoundException();
        }
    }
    async getAll() {
        const { clients } = await this.getAllClients.execute();
        return {
            clients: clients.map(httpClientMapper_1.httpClientMapper),
        };
    }
    async create(client) {
        await this.createClient.execute(client);
    }
    async update(updatedClientData, clientId) {
        await this.updateClient.execute(Object.assign(Object.assign({}, updatedClientData), { clientId }));
    }
    async delete(clientId) {
        try {
            await this.deleteClient.execute({ clientId });
        }
        catch (_a) {
            throw new common_1.NotFoundException();
        }
    }
};
__decorate([
    (0, api_response_decorator_1.ApiResponse)({ type: createClientDTO_1.GetClientResponse }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "getClient", null);
__decorate([
    (0, api_response_decorator_1.ApiResponse)({ type: createClientDTO_1.GetAllClientsResponse }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createClientDTO_1.CreateClientDTO]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(":id/update"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [updateClientDTO_1.UpdateClientDTO, String]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id/delete"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "delete", null);
ClientController = __decorate([
    (0, common_1.Controller)("clients"),
    __metadata("design:paramtypes", [createClient_1.CreateClient,
        updateClient_1.UpdateClient,
        deleteClient_1.DeleteClient,
        getClientDetails_1.GetClientDetails,
        getAllClients_1.GetAllClients])
], ClientController);
exports.ClientController = ClientController;
//# sourceMappingURL=client.controller.js.map