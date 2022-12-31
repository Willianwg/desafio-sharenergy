import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { User } from "../../components/User/User";

import "./Main.css";

type UserProps = {
    name: {
        title: string;
        first: string;
        last: string;
    };

    email: string;

    login: {
        uuid: string;
        username: string;
        password: string;
        salt: string;
        md5: string;
        sha1: string;
        sha256: string
    }
    dob: {
        date: Date;
        age: number;
    },

    picture: {
        thumbnail: string;
        medium: string;
        large: string;
    };
}

export function Main() {
    const [users, setUsers] = useState<UserProps[]>([]);

    useEffect(() => {
        async function loadUsers() {
            const response = await (await fetch("https://randomuser.me/api/?inc=picture,name,email,login,dob,?page=3&results=15&seed=abc")).json();

            setUsers(response.results);
        }

        loadUsers();
    }, []);

    return (
        <div className="main-page">
            <Header />
            <SearchBar />
            <div className="users-list">
                {
                    users.map((user, key) => {
                        return <User
                            key={key}
                            name={user.name.first + " " + user.name.last}
                            username={user.login.username}
                            email={user.email}
                            age={user.dob.age}
                            picture={user.picture.large}
                        />
                    })
                }
            </div>
        </div>
    )
}
