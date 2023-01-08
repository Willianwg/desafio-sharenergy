"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaClientMapper = void 0;
const Client_1 = require("../../../../application/entities/Client");
class PrismaClientMapper {
    static toPrisma(client) {
        return {
            id: client.id,
            name: client.name,
            email: client.email,
            phone: client.phone,
            document: client.document,
            address: client.address,
        };
    }
    static toDomain(raw) {
        const id = raw.id;
        return new Client_1.Client({
            name: raw.name,
            email: raw.email,
            phone: raw.phone,
            document: raw.document,
            address: raw.address,
        }, id);
    }
}
exports.PrismaClientMapper = PrismaClientMapper;
//# sourceMappingURL=PrismaClientMapper.js.map