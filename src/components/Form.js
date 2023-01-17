import React from "react";

function Form() {
    const handleChange = () => {

    }

    return (
        <div className="p-40">
            <form className="mx-auto p-12 rounded bg-white">
                <label htmlFor="description" className="block mx-auto"> Description
                    <input type="text" onChange={handleChange} className="form-input block mx-auto px-4 py-3"/>
                </label>

                <label htmlFor="category" className="block mx-auto"> Category
                    <input type="text" onChange={handleChange} className="form-input block mx-auto px-4 py-3"/>
                </label>

                <label htmlFor="amount" className="block mx-auto"> Amount
                    <input type="text" onChange={handleChange} className="form-input block mx-auto px-4 py-3"/>
                </label>

                <button type="submit" className="block bg-transparent hover:bg-blue-800 text-blue-500 hover:text-white font-bold py-2 px-4 rounded border border-blue-600 hover:border-transparent mx-auto my-4">Submit</button>
            </form>
        </div>
    );
}

export default Form;