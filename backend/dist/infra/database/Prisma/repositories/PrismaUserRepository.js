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
exports.PrismaUserRepository = void 0;
const decorators_1 = require("@nestjs/common/decorators");
const PrismaUserMapper_1 = require("../mappers/PrismaUserMapper");
const prisma_service_1 = require("../prisma.service");
let PrismaUserRepository = class PrismaUserRepository {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(user) {
        const mappedUser = PrismaUserMapper_1.PrismaUserMapper.toPrisma(user);
        await this.prismaService.user.create({
            data: mappedUser,
        });
    }
    async findByUsername(username) {
        const user = await this.prismaService.user.findFirst({
            where: {
                username
            }
        });
        if (!user) {
            return null;
        }
        return PrismaUserMapper_1.PrismaUserMapper.toDomain(user);
    }
};
PrismaUserRepository = __decorate([
    (0, decorators_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaUserRepository);
exports.PrismaUserRepository = PrismaUserRepository;
//# sourceMappingURL=PrismaUserRepository.js.map