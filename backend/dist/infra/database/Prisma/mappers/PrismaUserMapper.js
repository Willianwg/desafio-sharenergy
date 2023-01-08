"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaUserMapper = void 0;
const User_1 = require("../../../../application/entities/User");
class PrismaUserMapper {
    static toPrisma(user) {
        return {
            id: user.id,
            username: user.username,
            password: user.password,
        };
    }
    static toDomain(raw) {
        const id = raw.id;
        return new User_1.User({
            username: raw.username,
            password: raw.password,
        }, id);
    }
}
exports.PrismaUserMapper = PrismaUserMapper;
//# sourceMappingURL=PrismaUserMapper.js.map