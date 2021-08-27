import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import ExpenseTitle from "./ExpenseTitle.js";
import ExpenseAmount from "./ExpenseAmount.js";
import Card from "./Card.js";

function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <Card className="expense-item">
      <ExpenseDate month={month} day={day} year={year}></ExpenseDate>
      <div className="expense-item__description">
        <ExpenseTitle title={props.title}></ExpenseTitle>
        <ExpenseAmount amount={props.amount}></ExpenseAmount>
      </div>
    </Card>
  );
}

export default ExpenseItem;
