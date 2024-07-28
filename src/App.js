import { useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, charge: 'rent', amount: 1600 },
    { id: 2, charge: 'car payment', amount: 400 },
    { id: 3, charge: 'credit card bill', amount: 1200 }
  ]);


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
          <ExpenseForm />
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
