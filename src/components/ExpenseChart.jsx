
import { useSelector } from "react-redux";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

function ExpenseChart() {
  const transactions = useSelector(
    (state) => state.expenses.transactions
  );

  const income = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const expenses = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const data = [
    {
      name: "Income",
      value: income,
    },
    {
      name: "Expenses",
      value: expenses,
    },
  ];

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-5">
        Income vs Expenses
      </h2>

      <div className="flex justify-center">
        <PieChart width={400} height={300}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            <Cell />
            <Cell />
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
}

export default ExpenseChart;

