import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

store.dispatch(addExpense({description: 'Water bill', amount: 500, createdAt: 1100}));
store.dispatch(addExpense({ description: 'Gas bill', amount: 5500, createdAt: 1500}));
store.dispatch(addExpense({description: 'Rent', amount: 109500, createdAt: 100}));

const state = store.getState();
console.log('These are the visible expenses');
console.log(getVisibleExpenses(state.expenses, state.filters));

console.log('here is the final state of the store');
console.log(store.getState());

const jsx = (
    <Provider store={store}>
     <AppRouter />
     </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));
