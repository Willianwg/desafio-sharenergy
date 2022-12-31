type ClientProps = {
    name: string;
    email: string;
    phone: string;
    document: string;
    address: string;
}

export class Client {
    private _id: string;
    private props: ClientProps;

    constructor(props: ClientProps, id: string){
        this._id = id;
        this.props = props;
    }

    public get name(){
        return this.props.name;
    }
    public get email(){
        return this.props.email;
    }

    public get phone(){
        return this.props.phone;
    }

    public get document(){
        return this.props.document;
    }

    public get address(){
        return this.props.address;
    }

    public get id() {
        return this._id;
    }
}