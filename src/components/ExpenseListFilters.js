import React, { useState } from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "../actions/filters";

const ExpenseListFilters = (props) => {
    const [calendarFocused, setCalendarFocused] = useState(null);

    const onDatesChange = ({ startDate, endDate }) => {
        props.dispatch(setStartDate(startDate));
        props.dispatch(setEndDate(endDate));
    };

    const onFocusChange = ( calendarFocused ) => {
        setCalendarFocused(calendarFocused);
    };

    return (
        <div className="content-container">
            <div className="input-group">
                <div className="input-group__item">
                    <input type="text" value={props.filters.text} onChange={(e) => {
                        props.dispatch(setTextFilter(e.target.value));
                    }}/>
                </div>
                <div className="input-group__item">
                    <select value={props.filters.sortBy} onChange={(e) => {
                        e.target.value === "date" ? props.dispatch(sortByDate()) : props.dispatch(sortByAmount());
                    }}>
                        <option value="date">Date</option>
                        <option value="amount">Amount</option>
                    </select>
                </div>
                <div className="input-group__item">
                    <DateRangePicker
                        startDate={props.filters.startDate}
                        endDate={props.filters.endDate}
                        onDatesChange={onDatesChange}
                        focusedInput={calendarFocused}
                        onFocusChange={onFocusChange}
                        showClearDates={true}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);

