
import { useSelector, useDispatch } from "react-redux";
import { removeTransaction } from "../redux/expenseSlice";

function TransactionList() {
  const transactions = useSelector(
    (state) => state.expenses.transactions
  );

  const dispatch = useDispatch();

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-5">
        Transactions
      </h2>

      {transactions.length === 0 ? (
        <p className="text-gray-500 bg-white p-5 rounded-lg shadow">
          No transactions yet.
        </p>
      ) : (
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="bg-white shadow-md rounded-lg p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  {transaction.title}
                </h3>

                <p className="text-gray-600 mt-1">
                  Amount: Rs. {transaction.amount}
                </p>

                <p className="text-gray-600">
                  Type: {transaction.type}
                </p>

                <p className="text-gray-600">
                  Category: {transaction.category}
                </p>
              </div>

              <button
                onClick={() =>
                  dispatch(removeTransaction(transaction.id))
                }
                className="bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TransactionList;

