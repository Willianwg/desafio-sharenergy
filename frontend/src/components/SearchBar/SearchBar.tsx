import './SearchBar.css';
import loupe from './loupe.svg';
import React, { useState } from 'react';

type SearchBarProps = {
    placeholder: string;
    callback: any;
}

export function SearchBar(props: SearchBarProps) {
    const [search, setSearch] = useState('');

    function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        if (!search) return;
        props.callback(search);
        setSearch('');
    }

    function handleKeyDown(e: React.KeyboardEvent) {
        if (e.key === "Enter") {
            if (!search) return;
            props.callback(search);
            setSearch('');
        }
    }

    return (
        <div className="searchbar">
            <input
                value={search ?? ""}
                onChange={e => setSearch(e.target.value)}
                type="text"
                className="bar"
                placeholder={props.placeholder}
                onKeyDown={handleKeyDown}
            />

            <button className="btn" onClick={handleSubmit}>
                <img src={loupe} alt="loupe" className="bar-image" />
            </button>
        </div>

    )
}