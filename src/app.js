import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { store } from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { getVisibleExpenses } from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { Provider } from 'react-redux';
import { firebase } from './firebase/firebase';

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses); 
});

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));


firebase.auth().onAuthStateChanged((user) => {
    if (user){
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (window.location.pathname === '/') {
                window.history.pushState({}, undefined, '/dashboard');
                window.location.reload();
        }
        });
    } else {
        renderApp();
        if (window.location.pathname !== '/') {
            window.history.pushState({}, undefined, '/');
            window.location.reload();
        }
    }
 })