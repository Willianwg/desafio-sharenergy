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
exports.CreateUser = void 0;
const node_crypto_1 = require("node:crypto");
const User_1 = require("../../entities/User");
const userRepository_1 = require("../../repositories/userRepository");
const common_1 = require("@nestjs/common");
const passwordAuth_1 = require("../../helpers/passwordAuth");
let CreateUser = class CreateUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(request) {
        const id = (0, node_crypto_1.randomUUID)();
        const encryptedPassword = await passwordAuth_1.PasswordAuth.encrypt(request.password);
        const user = new User_1.User({
            username: request.username,
            password: encryptedPassword,
        }, id);
        await this.userRepository.create(user);
        return {
            user,
        };
    }
};
CreateUser = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [userRepository_1.UserRepository])
], CreateUser);
exports.CreateUser = CreateUser;
//# sourceMappingURL=createUser.js.map