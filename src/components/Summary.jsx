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
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-5">
        Summary
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        {/* Balance */}
        <div className="bg-white shadow-md rounded-lg p-5 border-l-4 border-blue-500">
          <h3 className="text-gray-500 text-sm font-medium">
            Total Balance
          </h3>

          <p className="text-2xl font-bold text-blue-600 mt-2">
            Rs. {balance}
          </p>
        </div>

        {/* Income */}
        <div className="bg-white shadow-md rounded-lg p-5 border-l-4 border-green-500">
          <h3 className="text-gray-500 text-sm font-medium">
            Total Income
          </h3>

          <p className="text-2xl font-bold text-green-600 mt-2">
            Rs. {income}
          </p>
        </div>

        {/* Expenses */}
        <div className="bg-white shadow-md rounded-lg p-5 border-l-4 border-red-500">
          <h3 className="text-gray-500 text-sm font-medium">
            Total Expenses
          </h3>

          <p className="text-2xl font-bold text-red-600 mt-2">
            Rs. {expenses}
          </p>
        </div>

      </div>
    </div>
  );
}

export default Summary;