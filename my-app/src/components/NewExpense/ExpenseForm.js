import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChange = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChange = (event) => {
    setAmount(event.target.value);
  };
  const dateChange = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
        title: enteredTitle,
        amount: +amount,
        date: new Date(date)
    }
    setEnteredTitle('');
    setAmount('');
    setDate('');
    props.onSaveExpenseData(expenseData)
  };

  const cancelClick = () => {
    props.onStopEditing()
  }

  //   const [userInput, setUserInput] = useState({
  //     title: '',
  //     amount: '',
  //     data: ''
  //   })
  //   const titleChange = (event) => {
  //     setUserInput((prevState) => {
  //         return { ...prevState, title: event.target.value}
  //     })
  //   };
  //   const amountChange = (event) => {
  //     setUserInput((prevState) => {
  //         return { ...prevState, amount: event.target.value}
  //     })
  //   };
  //   const dateChange = (event) => {
  //     setUserInput((prevState) => {
  //         return { ...prevState, date: event.target.value}
  //     })
  //   };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={amount} min="0.01" step="0.01" onChange={amountChange} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-10-10"
            max="2023-12-31"
            value={date}
            onChange={dateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={cancelClick}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
