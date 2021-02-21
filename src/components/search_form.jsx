import React from "react";

const SearchForm = ({ onSearch }) => {
    const inputRef = React.createRef();
    const onSubmit = (event) => {
        event.preventDefault();
        const searchWord = inputRef.current.value;
        searchWord && onSearch(searchWord);
    };

    const onClick = () => {
        inputRef.current.value = "";
        onSearch("");
    };

    return (
        <>
            <div className="header">
                <div className="header-logo">
                    <i className="fab fa-youtube"></i>
                    <button
                        style={{
                            padding: "0",
                            border: "none",
                            background: "none",
                        }}
                        onClick={onClick}
                    >
                        <h4>YouTube</h4>
                    </button>
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
