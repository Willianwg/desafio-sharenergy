"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordAuth = void 0;
const bcrypt = require("bcryptjs");
class PasswordAuth {
    static async compare(usedPassword, savedPassword) {
        const isValid = await bcrypt.compare(usedPassword, savedPassword);
        return isValid;
    }
    static async encrypt(password) {
        const encrypted = await bcrypt.hash(password, 10);
        return encrypted;
    }
}
exports.PasswordAuth = PasswordAuth;
//# sourceMappingURL=passwordAuth.js.map