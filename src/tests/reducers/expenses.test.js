import expensesReducer from '../../reducers/expenses';
import moment from 'moment';

import expenses from '../fixtures/expenses';

test('should set default state', () => {
   const state = expensesReducer(undefined, { type: '@@INIT' });
   expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
      type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});


test('should not remove expenses if id not found', () => {
    const action = {
      type: 'REMOVE_EXPENSE',
        id: undefined
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});


//--------------------------


test('should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: expenses[1],
    };

    const state = expensesReducer(undefined, action);
    expect(state).toEqual([expenses[1]]);
});



test('should edit an expense', () => {
    const description = 'Test';
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            description: description
        }
    };

    const state = expensesReducer(expenses, action);
    expect(state[0].description).toEqual( description );
});



test('should not edit expensed, if expense is not found', () => {
    const description = 'Test';
    const action = {
        type: 'EDIT_EXPENSE',
        id: undefined,
        updates: {
            description: description
        }
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual( expenses );
});

