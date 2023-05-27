import React from 'react';
import { connect } from 'react-redux';
import { ExpenseForm } from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import { useNavigate } from 'react-router-dom';

const EditExpensePage = (props) => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='page-header'>
                <div className='content-container'>
                    <h1 className='page-header__title'>Edit Expense</h1>
                </div>
            </div>
            <div className='content-container'>
                <ExpenseForm
                    expense={props.expense}
                    onSubmit={(expense) => {
                        props.dispatch(startEditExpense(props.expense.id, expense));
                        navigate('/');
                    }}
                />
                <button className='button button--secondary' onClick={() => {
                    props.dispatch(startRemoveExpense({id: props.expense.id}));
                    navigate('/');
                }}>Remove Expense</button>
            </div>
        </div>
    )
}
 
const mapStateToProps = (state) => {
    const params = {id: window.location.pathname.split("/")[2]}
    console.log(params.id);
    return {
        expense: state.expenses.find((expense) => expense.id === params.id)
    }
}
 
export default connect(mapStateToProps)(EditExpensePage);

