import React from "react";

function Search() {
    return (
        <form>
            <input type="text" className="form-input mt-8 mx-3 py-1 rounded-md" placeholder="Search"/>
            <button type="submit" className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full mx-5">Search</button>
        </form>
    );
}

export default Search;