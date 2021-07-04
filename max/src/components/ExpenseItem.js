import { useState } from 'react';

import Card from './Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props){
    const [title,updateTitle] = useState(props.title);
    
    const handleClick = () => {
        updateTitle('Updated state through hooks');
    }

    return <Card className="expense-item">
                <ExpenseDate date={props.date}/>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">{props.price}</div>
                </div>
                <button onClick={handleClick}>Click Me</button>
            </Card>    
}

export default ExpenseItem;