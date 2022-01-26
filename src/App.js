import ExpensesList from "./components/Expenses/ExpensesList";
import NewExpense from './components/NewExpense/NewExpense';
import './App.css'

function App() {
  const expenses = [
    {
      title: "Car Insurance",
      amount: 295.32,
      date: new Date(2021, 2, 28),
    },
    {
      title: "Food Expenses",
      amount: 125.23,
      date: new Date(2021, 1, 19),
    },
    {
      title: "Work Suits",
      amount: 500.24,
      date: new Date(2021, 2, 20),
    },
    {
      title: "Holidays",
      amount: 1300.12,
      date: new Date(2021, 1, 11),
    },
  ];

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  };

  return (
    <div>
      <h2 className="expenses_title">Expenses Tracker</h2>
      <div>
        <NewExpense onAddExpense={addExpenseHandler} />
        <ExpensesList items={expenses} />
      </div>
    </div>
  );
}

export default App;
