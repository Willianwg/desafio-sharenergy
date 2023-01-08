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
exports.CreateClient = void 0;
const Client_1 = require("../../entities/Client");
const clientRepository_1 = require("../../repositories/clientRepository");
const node_crypto_1 = require("node:crypto");
const common_1 = require("@nestjs/common");
let CreateClient = class CreateClient {
    constructor(clientRepository) {
        this.clientRepository = clientRepository;
    }
    async execute(request) {
        const id = (0, node_crypto_1.randomUUID)();
        const client = new Client_1.Client(request, id);
        await this.clientRepository.create(client);
        return {
            client,
        };
    }
};
CreateClient = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [clientRepository_1.ClientRepository])
], CreateClient);
exports.CreateClient = CreateClient;
//# sourceMappingURL=createClient.js.map