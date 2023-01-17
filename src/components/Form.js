import React, { useState } from "react";

function Form({ onAddTransaction }) {
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState(0);


    const handleDescChange = (e) => {
        setDescription(() => e.target.value);
    }
    const handleCatChange = (e) => {
        setCategory(() => e.target.value);
    }
    const handleAmountChange = (e) => {
        setAmount(() => e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const userInput = {
            date: new Date().toJSON().slice(0, 10),
            description: description,
            category: category,
            amount: amount
        };
        console.log(JSON.stringify(userInput));
        fetch("https://json-server-vercel-rose.vercel.app/transactions", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInput)
        }).then(data => {
            console.log(data)
            onAddTransaction(userInput);
        });
    }

    return (
        <div className="p-40">
            <form className="mx-auto p-12 rounded bg-white" onSubmit={handleSubmit}>
                <label htmlFor="description" className="block mx-auto"> Description
                    <input type="text" onChange={handleDescChange} value={description} className="form-input block mx-auto px-4 py-3 rounded-md"/>
                </label>

                <label htmlFor="category" className="block mx-auto"> Category
                    <input type="text" onChange={handleCatChange} value={category} className="form-input block mx-auto px-4 py-3 rounded-md"/>
                </label>

                <label htmlFor="amount" className="block mx-auto"> Amount
                    <input type="text" onChange={handleAmountChange} value={amount} className="form-input block mx-auto px-4 py-3 rounded-md"/>
                </label>

                <button type="submit" className="block bg-transparent hover:bg-blue-800 text-blue-500 hover:text-white font-bold py-2 px-4 rounded border border-blue-600 hover:border-transparent mx-auto my-4">Submit</button>
            </form>
        </div>
    );
}

export default Form;