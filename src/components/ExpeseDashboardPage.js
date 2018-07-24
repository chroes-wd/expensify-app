import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpeseDashboardPage = () => (
    <div>
        This is Dashboard
        <p>My Expenses:</p>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpeseDashboardPage;