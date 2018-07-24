import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense, editExpense} from './actions/expenses';
import {setTextFilter, sortByAmount, sortByDate} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

store.subscribe( () => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

store.dispatch(addExpense({ description: 'Water bill', amount: 880, createdAt: 2000 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 312, createdAt: 6000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500, createdAt: 4000 }));


setTimeout( () => {
    //store.dispatch(sortByAmount())
}, 1000);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
