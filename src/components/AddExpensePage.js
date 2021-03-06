import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    };

    render() {
       return (
           <div>
               <h1>Add Expense</h1>
               <ExpenseForm
                   onSubmit={this.onSubmit}
               />
           </div>
       );
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        startAddExpense: (expense) => dispatch(startAddExpense(expense))
    }
};

export default connect(undefined, mapDispatchToProps)(AddExpensePage);







/* BEFORE CHANGES FOR TESTING

import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm
            onSubmit={ (expense) => {
                props.dispatch(addExpense(expense));
                props.history.push('/');    // brings me to the startpage
            } }
        />
    </div>
);

export default connect()(AddExpensePage);

 */

