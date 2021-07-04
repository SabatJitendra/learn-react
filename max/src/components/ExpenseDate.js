import './ExpenseDate.css';

function ExpenseDate(props){
    let isoDate = new Date(props.date);    
    let day = isoDate.getDate();
    let month = isoDate.getMonth()+1;
    let year = isoDate.getFullYear();

    return <div className="expense-date">
                <div className="expense-date__day">{day}</div>
                <div className="expense-date__month">{month}</div>
                <div className="expense-date__day">{year}</div>
            </div>;
}

export default ExpenseDate;