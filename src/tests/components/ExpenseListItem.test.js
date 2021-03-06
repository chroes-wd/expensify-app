import React from 'react';
import { shallow } from 'enzyme';

import expenses from '../fixtures/expenses';
import {ExpenseListItem} from "../../components/ExpenseListItem";

test('should render ExpenseListItem with one expense', () => {
    const expense = expenses[0];
    const wrapper = shallow(<ExpenseListItem  key={expense.id} {...expense} /> );
    expect(wrapper).toMatchSnapshot();
});