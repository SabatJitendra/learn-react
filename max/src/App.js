import {useState} from 'react';
import ExpenseItem from './components/ExpenseItem';
import Card from './components/Card';
import NewExpense from './components/NewExpense/NewExpense';
import './App.css';
import ExpensesFilter from './components/ExpensesFilter';
import ExpensesChart from './components/ExpensesChart';

const DUMMY_EXPENSES = [
  {
    date : new Date(2021,2,28),
    title: "Car Insurance",
    price: 294.67
  },
  {
    date : new Date(2020,2,25),
    title: "Bike Insurance",
    price: 154.00
  },
  {
    date : new Date(2021,2,20),
    title: "Loan Insurance",
    price: 204.10
  },
  {
    date : new Date(2020,2,25),
    title: "Lungi Insurance",
    price: 154.00
  },
  {
    date : new Date(2023,2,20),
    title: "Loan Insurance",
    price: 204.10
  }    
];

function App() {
  let [expenseItemsArray,setExpenseItems] = useState(DUMMY_EXPENSES);
  let [globalItemsArray,setGlobalItemsArray] = useState(DUMMY_EXPENSES);  

  const parseNewExpenseDataToAppData = (newExpenseData) => {
    return {
      date: new Date(newExpenseData.date),
      title: newExpenseData.title,
      price: newExpenseData.amount
    }
  }

  const receiveNewData = (newExpenseData) => {    
    newExpenseData = parseNewExpenseDataToAppData(newExpenseData);
    setExpenseItems(previousExpense => {
      setGlobalItemsArray([newExpenseData, ...previousExpense]);
      return [newExpenseData, ...previousExpense];
    });
  }

  const onYearChange = (year) => {    
    if(year !== ''){
      setExpenseItems(previousExpenses => {
        let filteredExpenses = globalItemsArray.filter((expense,index) => {
          return expense.date.getFullYear() === parseInt(year);
        });
        return [...filteredExpenses];
      });
    }else{
      setExpenseItems(globalItemsArray);
    }    
  }
  
  return (         
      <Card className="container">
        <NewExpense onNewExpenseAdded={receiveNewData}/>
        <ExpensesFilter onYearChange={onYearChange}/>
        <ExpensesChart expenses={expenseItemsArray}/>
        {expenseItemsArray.length === 0 ? <p>No items found for the selected year.</p> :  expenseItemsArray.map((item,index) => 
          (<ExpenseItem date={item.date} 
                        title={item.title} 
                        price={item.price} 
                        key={index}></ExpenseItem>)
        )}
      </Card>            
  );
}

export default App;
