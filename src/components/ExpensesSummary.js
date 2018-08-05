import React from 'react';
import { connect } from 'react-redux'

import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

const ExpensesSummary = (props) => {
  return (
      <div>
          <p>My total Summary: {
            props.expensesTotal
          }</p>
      </div>
  );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);