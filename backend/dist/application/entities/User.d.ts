type UserProps = {
    username: string;
    password: string;
};
export declare class User {
    private _id;
    private props;
    constructor(props: UserProps, id: string);
    get username(): string;
    get password(): string;
    get id(): string;
}
export {};
