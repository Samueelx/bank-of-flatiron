import React from "react";
import Transaction from "./Transaction";

function Table({transactions}) {
    // console.log("In Table Component: ", transactions)
    const rows = transactions.map((item) => {
        return <Transaction key={item.id} date={item.date} description={item.description} category={item.category} amount={item.amount} />
    });
    
    return (
        <>
        <table className="m-auto table-auto border border-collapse border-slate-900 font-mono text-lg bg-white ">
            <thead>
                <tr className="font-black">
                    <th className="p-4 border border-slate-400">Date</th>
                    <th className="p-4 border border-slate-400">Descriprion</th>
                    <th className="p-4 border border-slate-400">Category</th>
                    <th className="p-4 border border-slate-400">Amount</th>
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