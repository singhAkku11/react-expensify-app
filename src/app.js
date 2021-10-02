import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const { expenses, filters } = state;
    const visibleExpenses = getVisibleExpenses(expenses, filters);
    console.log('State: ', state);
    console.log(visibleExpenses);
});

store.dispatch(addExpense({ description: 'Water Bill', amount: 500, createdAt: -900 }));
store.dispatch(addExpense({ description: 'Gas Bill', note: 'Gas Bill sector 28', amount: 500, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 10000 }));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'));

