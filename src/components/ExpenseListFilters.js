import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from "react-dates";

class ExpenseListFilters extends React.Component {
    constructor (props){
        super(props);
    }
    state = {
        calendarFocused: null
    };
    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange = (calendarFocused) => {
        this.setState( () => ({calendarFocused}) );
    };
    render () {
        return (
            <div>
                <input type="text"  value={this.props.filters.text} onChange={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value));
                    // every time we type into the inputfield, the new value gets added to the text-filter
                }} />
                <select value={this.props.filters.sortBy} onChange={ (e) => {
                    const value = e.target.value;
                    if(e.target.value === 'date') {
                        console.log(value);
                        this.props.dispatch(sortByDate())
                    } else if (e.target.value === 'amount'){
                        console.log(value);
                        this.props.dispatch(sortByAmount())
                    }
                } }>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={ () => false }
                />
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters,
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);