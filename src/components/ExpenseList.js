import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (    // We defined the component that we want to create the connected version of.The connect result is that we get the props from our store
  <div>
      <h1>My ExpenseList</h1>
      {props.expenses.map( (expense) => {
          return (
              <ExpenseListItem key={expense.id} {...expense} />

              /*
              <ExpenseListItem key = {expense.id}
                  description = {expense.description}
                  amount = {expense.amount}
                  createdAt = {expense.createdAt}
              />
              */
          )
      } )}
  </div>
);

const mapStateProps = (state) => {  // Things we want to get from the store
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
};

export default connect( mapStateProps )(ExpenseList);
