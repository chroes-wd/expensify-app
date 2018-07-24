import filterReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
   const state = filterReducer(undefined, { type: '@@INIT' });

   expect(state).toEqual({
       text: '',
       sortBy: 'date',
       startDate: moment().startOf('month'),
       endDate: moment().endOf('month')
   });
});

test('should set sortBy to amount', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});


test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = {type: 'SORT_BY_DATE'};
    const state = filterReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});


//------------------------

test('should set text filter', () => {
    const currentState = {  // Not neccessary; we can definde 'undefined' instead of currentState in line 47
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = {
        type: 'SET_TEXT_FILTER',
        text: 'test'
    };
    const state = filterReducer(currentState, action);
    expect(state.text).toBe('test');
});

test('should set start date filter', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = {
        type: 'SET_START_DATE',
        startDate: 0,
    };
    const state = filterReducer(currentState, action);
    expect(state.startDate).toBe(0);
});

test('should set end date filter', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = {
        type: 'SET_END_DATE',
        endDate: 0,
    };
    const state = filterReducer(currentState, action);
    expect(state.endDate).toBe(0);
});



