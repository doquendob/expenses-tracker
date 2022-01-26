import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from '../Filter/ExpensesFilter';
import Card from "../UI/Card";

const ExpensesList = (props) => {
    return (
        <Card className="expenses">
            {props.items.map(expense =>
                <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />)}
        </Card>
    );
}

export default ExpensesList;
