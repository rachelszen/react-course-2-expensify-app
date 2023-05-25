import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<LoginPage />} exact={true}/>
                <Route path="/dashboard" element={<ExpenseDashboardPage />}/>
                <Route path="/create" element={<AddExpensePage />} />
                <Route path="/edit/:id" element={<EditExpensePage />} />
                <Route path="/help" element={<HelpPage />} />
                <Route path ='/*' element={<NotFoundPage />} />
            </Routes>
        </div>
        </BrowserRouter>
);

export default AppRouter;