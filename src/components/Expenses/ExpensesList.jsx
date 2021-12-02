import React from 'react';
import ExpensesItem from './ExpensesItem';

import '../../assets/css/ExpensesList.css';

const ExpensesList = props => {
  const hasExpenses = props.expenses.length > 0;

  const expenses = props.expenses.map(expense => (
    <ExpensesItem
      key={expense.id}
      title={expense.title}
      price={expense.price}
      date={expense.date}
    />
  ));

  return hasExpenses ? (
    <ul className='expenses-list'>{expenses}</ul>
  ) : (
    <h2 className='expenses-list__fallback'>Found no expenses.</h2>
  );
};

export default ExpensesList;
