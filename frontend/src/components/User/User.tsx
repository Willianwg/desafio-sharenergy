import "./User.css";

type UserProps = {
    name: string;
    email: string;
    username: string;
    age: number;
    picture: string;
}

export function User(props: UserProps){
    return (
        <div className="user-container">
            <img src={ props.picture } className="user-image" />
            <div className="content">
                <p className="name">{ props.name }</p>
                <p className="username">@{ props.username }</p>
                <p className="email">{ props.email }</p>
                <p className="age">age: { props.age }</p>
            </div>
        </div>
    )
}