function ExpenseDate(props) {
  return (
    <div>
      <div>{props.month}</div>
      <div>{props.year}</div>
      <div>{props.day}</div>
    </div>
  );
}

export default ExpenseDate;
