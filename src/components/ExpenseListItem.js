import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({description, amount, createdAt, id}) => {
    return (
        <div>
        <Link to={`/edit/${id}`} > <h3>Description: {description}</h3></Link>
        <h3>Amount: {amount}</h3>
        <h3>Created at: {createdAt}</h3>
        </div>
    );

};

export default ExpenseListItem;