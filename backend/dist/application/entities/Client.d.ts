export type ClientProps = {
    name: string;
    email: string;
    phone: string;
    document: string;
    address: string;
};
export type UpdateClientProps = Partial<ClientProps>;
export declare class Client {
    private _id;
    private props;
    constructor(props: ClientProps, id: string);
    update(props: UpdateClientProps): void;
    get name(): string;
    get email(): string;
    get phone(): string;
    get document(): string;
    get address(): string;
    get id(): string;
}
