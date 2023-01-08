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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteClient = void 0;
const common_1 = require("@nestjs/common");
const clientRepository_1 = require("../../repositories/clientRepository");
const userNotFound_1 = require("../errors/userNotFound");
let DeleteClient = class DeleteClient {
    constructor(clientRepository) {
        this.clientRepository = clientRepository;
    }
    async execute(request) {
        const { clientId } = request;
        const client = await this.clientRepository.findClientById(clientId);
        if (!client)
            throw new userNotFound_1.UserNotFound();
        await this.clientRepository.deleteClientById(clientId);
    }
};
DeleteClient = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [clientRepository_1.ClientRepository])
], DeleteClient);
exports.DeleteClient = DeleteClient;
//# sourceMappingURL=deleteClient.js.map