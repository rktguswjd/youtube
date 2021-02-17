import React from "react";

const SearchForm = (props) => {
    const inputRef = React.createRef();
    const onSubmit = (event) => {
        event.preventDefault();
        const searchWord = inputRef.current.value;
        searchWord && props.onSearch(searchWord);
    };

    return (
        <>
            <div className="header">
                <div className="header-logo">
                    <i className="fab fa-youtube"></i>
                    <h4>YouTube</h4>
                </div>

                <form className="search-form" onSubmit={onSubmit}>
                    <input
                        ref={inputRef}
                        type="text"
                        className="search-input"
                        placeholder="Search.."
                    />
                    <button className="search-button">
                        <i className="fas fa-search"></i>
                    </button>
                </form>
            </div>
        </>
    );
};

export default SearchForm;
