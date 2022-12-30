type UserProps = {
    username: string;
    password: string;
}

export class User {
    private props: UserProps;

    constructor(props: UserProps){
        this.props = props;
    }

    public get username(){
        return this.props.username;
    }
    public get password(){
        return this.props.password;
    }
}