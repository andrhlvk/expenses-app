import '../../assets/css/ExpensesFilter.css';

const ExpensesFilter = props => {
  const selectedYearHandler = event => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label htmlFor='filter'>Filter by year</label>
        <select
          id='filter'
          value={props.selected}
          onChange={selectedYearHandler}
        >
          <option value='2021'>2021</option>
          <option value='2022'>2022</option>
          <option value='2023'>2023</option>
          <option value='2024'>2024</option>
          <option value='2025'>2025</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
