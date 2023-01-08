"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
class Client {
    constructor(props, id) {
        this._id = id;
        this.props = props;
    }
    update(props) {
        this.props = Object.assign(Object.assign({}, this.props), props);
    }
    get name() {
        return this.props.name;
    }
    get email() {
        return this.props.email;
    }
    get phone() {
        return this.props.phone;
    }
    get document() {
        return this.props.document;
    }
    get address() {
        return this.props.address;
    }
    get id() {
        return this._id;
    }
}
exports.Client = Client;
//# sourceMappingURL=Client.js.map