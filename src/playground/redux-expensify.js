import { createStore, combineReducers } from 'redux';
import uuid from 'uuid'

// ADD_EXPENSE
const addExpense = (
    {
        desciption = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
    ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        desciption,
        note,
        amount,
        createdAt
    }
});

// REMOVE_EXPENSE
const removeExpense = ( {id} = {} ) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// SET_TEXT_FILTER
const setTextFilter = (text) => ({
    type: 'SET_TEXT_FILTER',
    text
});
// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});
// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
});

// SET_END_DATE
const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
});


// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter( (expense) => {
                return expense.id !== action.id;
            } );
        case 'EDIT_EXPENSE':
            return state.map( (expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }

            } );
        default:
            return state;
    }
};

const filterReducerDefaultState = {
    text : '',
    sortBy : 'date',
    startDate : undefined,
    endDate : undefined
};

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch(action.type){
      case 'SET_TEXT_FILTER':
          return {
              ...state,
              text: action.text
          };
      case 'SORT_BY_DATE':
          return {
              ...state,
              sortBy : 'date'
          };
      case 'SORT_BY_AMOUNT':
          return {
              ...state,
              sortBy : 'amount'
          };
      case 'SET_START_DATE':
          return {
              ...state,
              startDate: action.startDate
          };
      case 'SET_END_DATE':
          return {
              ...state,
              endDate: action.endDate
          };
      default:
          return state;
  }
};

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter( (expense) => {
      const startDateMatch = typeof startDate  !== 'number' || expense.createdAt >= startDate;
      const enddateMatch = typeof endDate  !== 'number' || expense.createdAt <= endDate;
      const textMatch = expense.desciption.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && enddateMatch && textMatch;
  } ).sort( (a, b) => {
    if( sortBy === 'date' ) {
        return a.createdAt > b.createdAt ? 1 : -1;
    } else if(sortBy === 'amount') {
        return a.amount > b.amount ? 1 : -1;
    }
  });
};

// Store creation
const store = createStore(
    // expensesReducer
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);

store.subscribe( () => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});


const expenseOne = store.dispatch(addExpense({
    desciption: 'Rent',
    amount: 100,
    createdAt: 11,
}));
const expenseTwo = store.dispatch(addExpense({
    desciption: 'Coffee',
    amount: 300,
    createdAt: 23
}));


/*
console.log(store.getState());
console.log(expenseTwo);
store.dispatch(removeExpense( { id: expenseOne.expense.id } ));
store.dispatch(editExpense( expenseTwo.expense.id, {amount: 700} ));

store.dispatch(setTextFilter('rent'));

store.dispatch(sortByDate());


store.dispatch(setStartDate());         // set Startdate to undefined
store.dispatch(setEndDate(1250));

 store.dispatch(setTextFilter('offe'));

console.log('------------------------------');
console.log(store.getState());
*/
store.dispatch(sortByAmount());
//

//-1000           1000


const demoState = {
  expenses: [{
      id: 'asd',
      desciption: 'Rent June',
      note: 'Its expensive',
      amount: 57000,
      createdAt: 0
  }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};

