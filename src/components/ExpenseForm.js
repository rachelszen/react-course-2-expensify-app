import React, { useState } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import 'react-dates/lib/css/_datepicker.css';

export const ExpenseForm = (props) => {
    const [description, setDescription] = useState(props.expense ? props.expense.description : '');
    const [amount, setAmount] = useState(props.expense ? (props.expense.amount / 100).toString() : '');
    const [createdAt, setCreatedAt] = useState(props.expense ? moment(props.expense.createdAt) : moment());
    const [note, setNote] = useState(props.expense ? props.expense.note : '');
    const [calendarFocused, setCalendarFocused] = useState(false);
    const [error, setError] = useState(false);

    const onDescriptionChange = (e) => {
        const description = e.target.value;
        setDescription(description);
    };
    const onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            setAmount(amount);
        }
    };
    const onDateChange = (created) => {
        if (created) {
            setCreatedAt(created);
        }
    };
    const onFocusChange = ({ focused }) => {
        setCalendarFocused(focused)
    };
    const onNoteChange = (e) => {
        const note = e.target.value;
        setNote(note);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if (!description || !amount) {
            setError('Please provide description and amount');
        } else {
            setError(false);
            props.onSubmit({description, amount: parseFloat(amount, 10) * 100, createdAt: createdAt.valueOf(), note});
        }
    };

    return (
        <div>
            {error && <p>{error}</p>}
            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    placeholder="Description" 
                    autoFocus 
                    className="text-input"
                    value={description} 
                    onChange={onDescriptionChange} />
                <input 
                    type="text" 
                    placeholder="Amount" 
                    className="text-input"
                    value={amount} 
                    onChange={onAmountChange} />
                <SingleDatePicker 
                    date={createdAt} 
                    onDateChange={onDateChange} 
                    focused={calendarFocused} 
                    onFocusChange={onFocusChange} 
                    numberOfMonths={1} 
                    isOutsideRange={() => false} />
                <textarea 
                    placeholder="Add a note for your expense (option)" 
                    className="textarea"
                    value={note} 
                    onChange={onNoteChange} />
                <button>Add Expense</button>
            </form>
        </div>
    );
};

