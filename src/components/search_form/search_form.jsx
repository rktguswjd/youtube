import React, { useRef } from "react";

const SearchForm = ({ onSearch }) => {
    const inputRef = useRef();
    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);
    };

    const onClick = () => {
        handleSearch();
    };

    const onKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <header className="header">
            <div className="header-logo">
                <i className="fab fa-youtube"></i>
                <h4>YouTube</h4>
            </div>
            <input
                ref={inputRef}
                type="search"
                className="search-input"
                placeholder="Search.."
                onKeyPress={onKeyPress}
            />
            <button className="search-button" type="submit" onClick={onClick}>
                <i className="fas fa-search"></i>
            </button>
        </header>
    );
};

export default SearchForm;
