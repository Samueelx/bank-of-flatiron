import React from "react";
import Search from '../Search';
/**bg-cyan-600 bg-stone-300	*/

function Header() {
    return (
        <header className="sticky top-0 flex justify-between content-center shadow-lg mb-2 rounded bg-gradient-to-r from-neutral-500 via-stone-300 to-cyan-800">
            <h2 className="text-3xl my-9 p-2 border-none text-stone-100">Bank Of Flatiron</h2>
            <Search />
        </header>
    );
}

export default Header;