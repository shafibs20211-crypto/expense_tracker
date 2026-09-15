import { useSelector } from "react-redux";

function Summary() {
  const transactions = useSelector(
    (state) => state.expenses.transactions
  );

  const income = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const expenses = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const balance = income - expenses;

  return (
    <div>
      <h2>Summary</h2>

      <p>Total Balance: Rs. {balance}</p>
      <p>Total Income: Rs. {income}</p>
      <p>Total Expenses: Rs. {expenses}</p>
    </div>
  );
}

export default Summary;