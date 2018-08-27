import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
    return (
        <div>
            <h3>Edit Expense: {props.expense.description}</h3>

            <ExpenseForm
                expense={props.expense}
                onSubmit={ (expense) => {
                    props.dispatch(startEditExpense(props.expense.id, expense));
                    props.history.push('/');    // brings me to the startpage
                } }
            />

            <button onClick={ () => {
                console.log( {id: props.expense.id});
                console.log('---');
                console.log(props.history);
                props.dispatch( startRemoveExpense( {id: props.expense.id} ) );
                props.history.push('/');    // brings me to the startpage
            } }>Remove</button>

        </div>
    )
};

const mapStateToProps = (state, props) => {
  return {
      expense: state.expenses.find( (expense) => {
          return expense.id === props.match.params.id;
      } )
  }
};

export default connect(mapStateToProps)(EditExpensePage);