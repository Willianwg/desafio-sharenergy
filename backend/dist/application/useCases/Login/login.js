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
exports.Login = void 0;
const common_1 = require("@nestjs/common");
const passwordAuth_1 = require("../../helpers/passwordAuth");
const userRepository_1 = require("../../repositories/userRepository");
const InvalidPassword_1 = require("../errors/InvalidPassword");
const userNotFound_1 = require("../errors/userNotFound");
let Login = class Login {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(request) {
        const user = await this.userRepository.findByUsername(request.username);
        if (!user) {
            throw new userNotFound_1.UserNotFound();
        }
        const isPasswordValid = await passwordAuth_1.PasswordAuth.compare(request.password, user.password);
        if (!isPasswordValid) {
            throw new InvalidPassword_1.InvalidPassword();
        }
        return {
            user
        };
    }
};
Login = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [userRepository_1.UserRepository])
], Login);
exports.Login = Login;
//# sourceMappingURL=login.js.map