import './App.css';
import Header from './Header';
import Table from '../Table';
import { useEffect, useState } from 'react';

function App() {
  
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("https://api.npoint.io/4ea1a71ea4093e511948")
    .then(response => response.json())
    .then(data => {
      setTransactions(data.transactions);
    });
  }, []);

  return (
    <>
    <Header />
    <div>
      <Table transactions={transactions}/>
    </div>
    </>
  );
}

export default App;
