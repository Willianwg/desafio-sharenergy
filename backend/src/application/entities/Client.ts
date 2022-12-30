type ClientProps = {
    name: string;
    email: string;
    number: string;
    document: string;
    address: string;
}

export class Client {
    private props: ClientProps;

    constructor(props: ClientProps){
        this.props = props;
    }

    public get name(){
        return this.props.name;
    }
    public get email(){
        return this.props.email;
    }

    public get number(){
        return this.props.number;
    }

    public get document(){
        return this.props.document;
    }

    public get address(){
        return this.props.address;
    }
}