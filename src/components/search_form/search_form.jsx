import React, { useRef } from "react";
import styles from "./search_form.module.css";

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
        <header className={styles.header}>
            <div className={styles.title}>
                <i className={`fab fa-youtube fa-2x ${styles.logo}`}></i>
                <h2 className={styles.titleName}>YouTube</h2>
            </div>
            <input
                ref={inputRef}
                type="search"
                className={styles.input}
                placeholder="Search.."
                onKeyPress={onKeyPress}
            />
            <button className={styles.button} type="submit" onClick={onClick}>
                <i className={`fas fa-search ${styles.search}`}></i>
            </button>
        </header>
    );
};

export default SearchForm;
