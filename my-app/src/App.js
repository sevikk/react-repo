import { useState } from "react";
import "./App.css";
import Expense from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const INITIAL_EXPENSES = [
  {
    id: "1",
    title: "text 1",
    amount: 294.67,
    date: new Date(2020, 1, 2),
  },
  {
    id: "2",
    title: "text 2",
    amount: 294.67,
    date: new Date(2021, 2, 20),
  },
  {
    id: "3",
    title: "text 3",
    amount: 294.67,
    date: new Date(2020, 3, 28),
  },
  {
    id: "4",
    title: "text 4",
    amount: 294.67,
    date: new Date(2020, 4, 29),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };
  return (
    <div>
      <NewExpense onAddExpenses={addExpenseHandler} />
      <Expense expenses={expenses} />
    </div>
  );
}

export default App;
