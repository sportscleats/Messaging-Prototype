import React from 'react';
import { StyledSearch } from "./Search.styled";

import search from './search-icons/Search.svg'
import filter from './search-icons/filter.svg'


const Search = () => {
    return (
        <StyledSearch>
        <div className="search-bar">
            <div className="search-icon"><img className="input-icon" src={search}/></div>
            <input className="search-input" placeholder="Search Contacts or Properties"></input>
            <div className="search-icon"><img className="input-icon filter" src={filter}/></div>

        </div>
        </StyledSearch>
    )
}


export default Search;