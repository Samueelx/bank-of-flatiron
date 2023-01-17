import './App.css';
import Header from './Header';
import Table from '../Table';
import Form from '../Form';
import { useEffect, useState } from 'react';

function App() {
  
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("https://json-server-vercel-rose.vercel.app/transactions")
    .then(response => response.json())
    .then(data => {
      setTransactions(data);
    });
  }, []);

  function addTransaction(newTransaction) {
    const updatedTransactions = [...transactions, newTransaction];
    setTransactions(updatedTransactions);
  }

  return (
    <div className="bg-teal-300/75">
      <Header />
      <div>
        <Table transactions={transactions}/>
      </div>
      <Form onAddTransaction={addTransaction}/>
    </div>
  );
}

export default App;
