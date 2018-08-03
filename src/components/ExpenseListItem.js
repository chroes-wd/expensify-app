import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = ({ id, description, amount, createdAt, dispatch } ) => { // dispatch MUST given through seperator
    return (
        <div>
            <Link to={"/edit/" + id}>
                <h3>{description}</h3>
            </Link>
            <p>Amount:
                {numeral(amount/100).format('€0,0.00')}
                -
                Created At:
                {moment(createdAt).format('MMMM Do, YYYY')}
            </p>
        </div>
    )
};

export default connect()(ExpenseListItem);