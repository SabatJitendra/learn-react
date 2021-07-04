import React,{ useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [userInput, updateUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });
    
    const titleChangeHandler = (event) => {
        updateUserInput({
            ...userInput,
            enteredTitle: event.target.value
        });
        console.log(userInput);
    }

    const amountChangeHandler = (event) => {
        updateUserInput({
            ...userInput,
            enteredAmount: event.target.value
        });
        console.log(userInput);
    }

    const dateChangeHandler = (event) => {
        updateUserInput({
            ...userInput,
            enteredDate: event.target.value
        });
        console.log(userInput);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        let data = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: userInput.enteredDate
        }
        props.onExpenseSubmission(data);//passing collected form data to NewExpense parent component using callback mechanism
        updateUserInput((prev) => { //on submit resetting the form fields to empty value
            return {
                ...prev,
                enteredTitle: '',
                enteredAmount: '',
                enteredDate: ''
            };
        });
    }
    //Binding form field value attribute to state variables is known as two way binding.This way if we change something in field value,it will be 
    //automagically stored in state and vice versa.
    return <div>
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={userInput.enteredTitle} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={userInput.enteredAmount}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value={userInput.enteredDate}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    </div>
}

export default ExpenseForm;