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
exports.PrismaClientRepository = void 0;
const decorators_1 = require("@nestjs/common/decorators");
const PrismaClientMapper_1 = require("../mappers/PrismaClientMapper");
const prisma_service_1 = require("../prisma.service");
let PrismaClientRepository = class PrismaClientRepository {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findAllClients() {
        const clients = await this.prismaService.client.findMany();
        return clients.map(PrismaClientMapper_1.PrismaClientMapper.toDomain);
    }
    async create(client) {
        const mappedClient = PrismaClientMapper_1.PrismaClientMapper.toPrisma(client);
        await this.prismaService.client.create({
            data: mappedClient,
        });
    }
    async deleteClientById(clientId) {
        await this.prismaService.client.delete({
            where: {
                id: clientId
            }
        });
    }
    async findClientById(clientId) {
        const client = await this.prismaService.client.findFirst({
            where: {
                id: clientId
            }
        });
        if (!client) {
            return null;
        }
        return PrismaClientMapper_1.PrismaClientMapper.toDomain(client);
    }
    async updateClient(client) {
        const mappedClient = PrismaClientMapper_1.PrismaClientMapper.toPrisma(client);
        const { id } = mappedClient;
        delete mappedClient.id;
        await this.prismaService.client.update({
            where: {
                id,
            },
            data: mappedClient
        });
    }
};
PrismaClientRepository = __decorate([
    (0, decorators_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaClientRepository);
exports.PrismaClientRepository = PrismaClientRepository;
//# sourceMappingURL=PrismaClientRepository.js.map