type UserProps = {
    username: string;
    password: string;
}

export class User {
    private _id: string;
    private props: UserProps;

    constructor(props: UserProps, id: string) {
        this._id = id;
        this.props = props;
    }

    public get username() {
        return this.props.username;
    }
    
    public get password() {
        return this.props.password;
    }

    public get id() {
        return this._id;
    }
}