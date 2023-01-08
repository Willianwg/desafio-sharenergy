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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const InvalidPassword_1 = require("../../../application/useCases/errors/InvalidPassword");
const userNotFound_1 = require("../../../application/useCases/errors/userNotFound");
const createUser_1 = require("../../../application/useCases/User/createUser");
const auth_service_1 = require("../../../auth/auth.service");
const jwtAuth_guard_1 = require("../../../auth/jwtAuth.guard");
const createUserDTO_1 = require("../dtos/User/createUserDTO");
const loginDTO_1 = require("../dtos/User/loginDTO");
let UserController = class UserController {
    constructor(createUser, authentication) {
        this.createUser = createUser;
        this.authentication = authentication;
    }
    async create(user) {
        await this.createUser.execute(user);
    }
    async loginUser(loginData) {
        try {
            const { username, password } = loginData;
            const { access_token } = await this.authentication.login(username, password);
            return {
                access_token
            };
        }
        catch (err) {
            if (err.message === new userNotFound_1.UserNotFound().message) {
                throw new common_1.NotFoundException();
            }
            else if (err.message === new InvalidPassword_1.InvalidPassword().message) {
                throw new common_1.UnauthorizedException();
            }
        }
    }
    async authenticate(request) {
        return {
            user: request.user,
        };
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUserDTO_1.CreateUserDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("login"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loginDTO_1.LoginDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "loginUser", null);
__decorate([
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    (0, common_1.Get)("auth"),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "authenticate", null);
UserController = __decorate([
    (0, common_1.Controller)("user"),
    __metadata("design:paramtypes", [createUser_1.CreateUser,
        auth_service_1.AuthService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map