import { useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

const App = () => {

  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState(0);

  const [expenses, setExpenses] = useState([
  ]);


  const handleCharge = (e) => {
    console.log(`charge: ${e.target.value}`);
    setCharge(e.target.value);
  }

  const handleAmount = (e) => {
    console.log(`amount: ${e.target.value}`);
    setAmount(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      const singleExpense = { id: expenses.length + 1, charge, amount };
      setExpenses([...expenses, singleExpense]);
      setCharge("");
      setAmount(0);
    } else {
      console.log("charge or amount can't be empty or amount must be bigger than zero");
    }
  }


  const handleDelete = (id) => {
    const newExpenses = expenses.filter(
      (expense) => expense.id !== id
    );
    setExpenses(newExpenses);
    
  };

  
    return (
      <main className="main-container">
        <h1>예산 계산기</h1>

        <div
          style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}>
          <ExpenseForm charge={charge} handleCharge={handleCharge}
            handleAmount={handleAmount}
            amount={amount}
            handleSubmit={ handleSubmit} />
        </div>

        <div
          style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}>
          <ExpenseList
            initialExpenses={expenses}
            handleDelete={handleDelete}
          />
        </div>

        <div
          style={{ display: 'flex', justifyContent: 'end', marginTop: '1rem' }}>
          <p style={{ fontSize: '2rem' }}>
            총 지출
            <span> 0원</span>
          </p>
        </div>
      </main>
    );
  }

export default App;
