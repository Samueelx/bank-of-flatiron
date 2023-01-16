import React from "react";
import Transaction from "./Transaction";

function Table({transactions}) {
    console.log("In Table Component: ", transactions)
    const rows = transactions.map((item) => {
        return <Transaction key={item.id} date={item.date} description={item.description} category={item.category} amount={item.amount} />
    });
    
    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Descriprion</th>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
        </>
    );
}

export default Table;