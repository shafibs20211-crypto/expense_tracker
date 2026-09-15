import { useSelector, useDispatch } from "react-redux";
import { removeTransaction } from "../redux/expenseSlice";

function TransactionList() {
  const transactions = useSelector(
    (state) => state.expenses.transactions
  );

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Transactions</h2>

      {transactions.length === 0 ? (
        <p>No transactions yet.</p>
      ) : (
        transactions.map((transaction) => (
          <div key={transaction.id}>
            <h3>{transaction.title}</h3>

            <p>Amount: Rs. {transaction.amount}</p>

            <p>Type: {transaction.type}</p>

            <p>Category: {transaction.category}</p>

            <button
              onClick={() => dispatch(removeTransaction(transaction.id))}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default TransactionList;