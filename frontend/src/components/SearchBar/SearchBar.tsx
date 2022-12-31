import './SearchBar.css';
import loupe from './loupe.svg';
import { useState } from 'react';

export function SearchBar(){
    const [search, setSearch] = useState('');

    return(
        <div className="searchbar">
            <input onChange={ e => setSearch(e.target.value)} type="text" className="bar"  placeholder='Search by name, email or username'/>
            <button className="btn">
                <img src={ loupe } alt="loupe" className="bar-image"/>
            </button>
        </div>
        
    )
}