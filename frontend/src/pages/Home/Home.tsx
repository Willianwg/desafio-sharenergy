import React, { useEffect, useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { User } from "../../components/User/User";

import "./Home.css";

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

export function Home() {
    const [users, setUsers] = useState<UserProps[]>([]);
    const [usersPaged, setPagination] = useState<UserProps[]>([]);
    const [page, setPage] = useState(1);

    function handleNext(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        setPage(page + 1);
        pagination(page + 1, true);
    }

    function handleBack(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        if (page < 2) return;

        setPage(page - 1);
        pagination(page - 1, true);
    }

    function pagination(pageNumber: number, scroll?: boolean, usersArray?: UserProps[]) {
        const initial = 15 * (pageNumber - 1);

        if (usersArray) {
            const paged = usersArray.slice(initial, 15 * pageNumber);
            setPagination(paged);
        } else {
            const paged = users.slice(initial, 15 * pageNumber);
            setPagination(paged);
        }

        if (scroll) window.scrollTo(0, 100);
    }

    function handleSearch(text: string) {
        if (!text) {
            return pagination(1);
        }

        const searchResponse = users.filter(user => {
            const name = user.name.first + " " + user.name.last;
            if (name.toLowerCase().includes(text.toLowerCase())) return user;

            if (user.login.username.includes(text)) return user;

            if (user.email.includes(text)) return user;
        })

        setPagination(searchResponse);
    }

    useEffect(() => {
        async function loadUsers() {
            const response = await (await fetch(`https://randomuser.me/api/?inc=picture,name,email,login,dob&results=120&seed=abc`)).json();
            setUsers(response.results);

            pagination(1, false, response.results);

        }
        
        loadUsers();
    }, []);

    return (
        <div className="main-page">
            <Header />
            <SearchBar placeholder="Search by name, email or username" callback={handleSearch} />
            <div className="users-list">
                {
                    usersPaged.map((user, key) => {
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
                    page > 1 && <button className="btn" onClick={handleBack}>Back</button>
                }
                <button className="btn" onClick={handleNext}>Next</button>
            </div>
            <Footer />
        </div>
    )
}
