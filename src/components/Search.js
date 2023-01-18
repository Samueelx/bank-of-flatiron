import React, { useState } from "react";

function Search({onSearch}) {
    const [query, setQuery] = useState("");

    function handleOnChange(e) {
        setQuery( () => e.target.value.toLowerCase());
        // onSearch(query);
        console.log(onSearch);
    }

    function handleOnSubmit(e) {
        e.preventDefault();
        // setQuery(() => e.target.value);
        onSearch(query);
        setQuery("");
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input type="text" onChange={handleOnChange} className="form-input mt-8 mx-3 py-1 rounded-md" placeholder="Search"/>
            <button type="submit" className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full mx-5">Search</button>
        </form>
    );
}

export default Search;