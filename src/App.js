import { useEffect, useState } from 'react';
import BudgetControl from './components/BudgetControl';
import Form from './components/Form';
import List from './components/List';
import Question from './components/Question';

function App() {
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({});
  const [createExpense, setCreateExpense] = useState(false);
  useEffect(() => {
    if (createExpense) {
      setExpenses([...expenses, expense]);
      const remainingExpense = remaining - expense.quantity;
      setRemaining(remainingExpense);
      setCreateExpense(false);
    }
  }, [expense, createExpense, expenses, remaining]);

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          {showQuestion ? (
            <Question setBudget={setBudget} setRemaining={setRemaining} setShowQuestion={setShowQuestion} />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form setExpense={setExpense} setCreateExpense={setCreateExpense} />
              </div>
              <div className="one-half column">
                <List expenses={expenses} />
                <BudgetControl budget={budget} remaining={remaining} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
