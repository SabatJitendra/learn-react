import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

function NewExpense(props){

    const expenseSubmit = (expenseData) => {
        props.onNewExpenseAdded(expenseData);//passing expenseData to parent App component using callback mechanism
    }
    return <div className="new-expense">
        <ExpenseForm onExpenseSubmission={expenseSubmit}/>
    </div>
}

export default NewExpense;