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
exports.GetAllClientsResponse = exports.GetClientResponse = exports.CreateClientDTO = void 0;
const decorators_1 = require("@nestjs/swagger/dist/decorators");
const class_validator_1 = require("class-validator");
class CreateClientDTO {
}
__decorate([
    (0, decorators_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateClientDTO.prototype, "name", void 0);
__decorate([
    (0, decorators_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateClientDTO.prototype, "email", void 0);
__decorate([
    (0, decorators_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateClientDTO.prototype, "phone", void 0);
__decorate([
    (0, decorators_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateClientDTO.prototype, "document", void 0);
__decorate([
    (0, decorators_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateClientDTO.prototype, "address", void 0);
exports.CreateClientDTO = CreateClientDTO;
class Client {
}
__decorate([
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], Client.prototype, "id", void 0);
__decorate([
    (0, decorators_1.ApiProperty)({}),
    __metadata("design:type", String)
], Client.prototype, "name", void 0);
__decorate([
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], Client.prototype, "email", void 0);
__decorate([
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], Client.prototype, "phone", void 0);
__decorate([
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], Client.prototype, "document", void 0);
__decorate([
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], Client.prototype, "address", void 0);
;
class GetClientResponse {
}
__decorate([
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", Client)
], GetClientResponse.prototype, "client", void 0);
exports.GetClientResponse = GetClientResponse;
class GetAllClientsResponse {
}
__decorate([
    (0, decorators_1.ApiProperty)({ type: [Client] }),
    __metadata("design:type", Array)
], GetAllClientsResponse.prototype, "clients", void 0);
exports.GetAllClientsResponse = GetAllClientsResponse;
//# sourceMappingURL=createClientDTO.js.map