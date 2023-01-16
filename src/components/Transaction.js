function Transaction({date, description, category, amount}) {
    return (
        <tr>
        <td className="p-2 border border-slate-400">{date}</td>
        <td className="p-2 border border-slate-400">{description}</td>
        <td className="p-2 border border-slate-400">{category}</td>
        <td className="p-2 border border-slate-400">{amount}</td>
    </tr>
    );
}

export default Transaction;