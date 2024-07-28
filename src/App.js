import { useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import Alert from './components/Alert';
import ExpenseList from './components/ExpenseList';

const App = () => {

  const [charge, setCharge] = useState("");
  const [id, setId] = useState(0);
  const [amount, setAmount] = useState(0);
  const [alert, setAlert] = useState({ show: false });  
  const [expenses, setExpenses] = useState([]);
  const [edit, setEdit] = useState({ show: false });
  


  const clearItems = () => {
    setExpenses([]);
    handleAlert({ type: 'danger', text: '모든 항목이 삭제되었습니다.' });
  }

  const handleCharge = (e) => {  
    setCharge(e.target.value);
  }
  
  const handleAmount = (e) => {
    setAmount(e.target.valueAsNumber);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (edit) {
        const newExpense = expenses.map((expense) => {
          return expense.id === id ? { ...expense, charge, amount } : expense;
        });
        setExpenses(newExpense);
        setEdit(false);
        handleAlert({ type: 'success', text: '수정되었습니다.' });
      } else {
        const newExpense = { id: expenses.length + 1, charge, amount };
        setExpenses([...expenses, newExpense]);
        setCharge("");
        setAmount(0);
        handleAlert({ type: 'success', text: '지출이 추가되었습니다.' });
      }
}
       else {
        handleAlert({
          type: 'danger', text: '내용을 입력해주세요.'
        });
      }
    }

  
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  }
  
  
    const handleEdit = (id) => {
      const expense = expenses.find(expense => expense.id === id)
      const { charge, amount } = expense;
      setId(id);
      setCharge(charge);
      setAmount(amount);
      setEdit(true);
    }

  const handleDelete = (id) => {
    const newExpenses = expenses.filter(
      (expense) => expense.id !== id
    );
    setExpenses(newExpenses);
    
  };

  
    return (
      <main className="main-container">
        {alert.show ? <Alert type={alert.type} text={ alert.text} /> : null}
        <h1>예산 계산기</h1>

        <div
          style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}>
          <ExpenseForm charge={charge} handleCharge={handleCharge}
            handleAmount={handleAmount}
            amount={amount}
            edit={edit}
            handleSubmit={handleSubmit}
            handleEdit={ handleEdit} />
        </div>

        <div
          style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}>
          <ExpenseList
            expenses={expenses}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            clearItems={clearItems}
          />
        </div>

        <div
          style={{ display: 'flex', justifyContent: 'end', marginTop: '1rem' }}>
          <p style={{ fontSize: '2rem' }}>
            총 지출: 
            <span>{expenses.reduce((acc, curr) => {
              return (acc += curr.amount);
             }, 0)} 원</span>
          </p>
        </div>
      </main>
    );
  }

export default App;
