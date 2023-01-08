"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(props, id) {
        this._id = id;
        this.props = props;
    }
    get username() {
        return this.props.username;
    }
    get password() {
        return this.props.password;
    }
    get id() {
        return this._id;
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map