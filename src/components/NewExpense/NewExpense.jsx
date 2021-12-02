import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpenseForm from './ExpenseForm';
import '../../assets/css/NewExpense.css';

const NewExpense = props => {
  const [addingExpense, setAddingExpense] = useState(false);

  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Date.now(),
    };
    props.onAddExpense(expenseData);
    setAddingExpense(false);
  };

  const showForm = () => {
    setAddingExpense(true);
  };

  const hideForm = () => {
    setAddingExpense(false);
  };

  return (
    <Card className='new-expense'>
      {addingExpense ? (
        <ExpenseForm
          onCancel={hideForm}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      ) : (
        <button onClick={showForm}>Add New Expense</button>
      )}
    </Card>
  );
};

export default NewExpense;
