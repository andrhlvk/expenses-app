import React, { useState } from 'react';
import Card from '../UI/Card';

import '../../assets/css/Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';

const Expenses = props => {
  const [filterYear, setFilterYear] = useState('2021');

  const filteredExpenses = props.expenses.filter(
    expense => expense.date.getFullYear().toString() === filterYear
  );

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={filterYear} onChangeFilter={setFilterYear} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
