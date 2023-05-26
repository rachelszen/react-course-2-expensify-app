import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { store } from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import { getVisibleExpenses } from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { Provider } from 'react-redux';
import { firebase } from './firebase/firebase';
import { history } from './routers/AppRouter';

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
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (window.location.pathname === '/') {
                history.push('/dashboard')
        }
        });
    } else {
        renderApp();
        store.dispatch(logout());
        history.push('/');
    }
 })