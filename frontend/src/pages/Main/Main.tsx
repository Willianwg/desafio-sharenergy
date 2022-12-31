import React, { useEffect, useState } from "react";
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
    const [page, setPage] = useState(1);

    function handleNext(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();
        
        setPage(page + 1);
        loadUsers(page + 1);
    }

    function handleBack(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();
        
        if(page < 2) return;

        setPage(page - 1);
        loadUsers(page - 1);
    }

    async function loadUsers(pageNumber: number) {
        const response = await (await fetch(`https://randomuser.me/api/?inc=picture,name,email,login,dob,?page=${pageNumber}&results=15&seed=${pageNumber + 100}`)).json();

        setUsers(response.results);
    }

    useEffect(() => {
        loadUsers(page);
    }, [page]);

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
            <div className="list-buttons">
                {
                    page > 1 && <button className="list-button" onClick={handleBack}>Back</button>
                }
                <button className="list-button" onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}
