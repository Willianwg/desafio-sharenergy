"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpClientMapper = void 0;
function httpClientMapper(client) {
    return {
        id: client.id,
        name: client.name,
        email: client.email,
        phone: client.phone,
        document: client.document,
        address: client.address
    };
}
exports.httpClientMapper = httpClientMapper;
//# sourceMappingURL=httpClientMapper.js.map