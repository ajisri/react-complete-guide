import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import ExpenseTitle from "./ExpenseTitle.js";
import ExpenseAmount from "./ExpenseAmount.js";
import Card from "./Card.js";

function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  let title = props.title; // "Toilet Paper"

  const eventHandler = () => {
    let newTitle = "Radio"; // newTitle = "Radio", title = "Toilet Paper"

    title = newTitle; // newTitle = "Radio", title = "Radio"
    // mengupdate komponen ini setelah ada perubahan variabel "title"
    // dengan kata lain, mengupdate state komponen ini dari state awalnya
    // menjadi state dengan "title" baru
  };

  return (
    <Card className="expense-item">
      <ExpenseDate month={month} day={day} year={year}></ExpenseDate>
      <div className="expense-item__description">
        <ExpenseTitle title={title}></ExpenseTitle>
        <ExpenseAmount amount={props.amount}></ExpenseAmount>
      </div>
      <button onClick={eventHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
