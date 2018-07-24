import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';

export const ExpenseListItem = ({ id, description, amount, createdAt, dispatch } ) => { // dispatch MUST given through seperator
    return (
        <div>
            <Link to={"/edit/" + id}>
                <h3>{description}</h3>
            </Link>
            <p>Amount: {amount} - Created At: {createdAt}</p>

            {/*
            <button onClick={ () => {
                dispatch( removeExpense( {id} ) );
            } }>Remove</button>
*/}

        </div>
    )
};

export default connect()(ExpenseListItem);