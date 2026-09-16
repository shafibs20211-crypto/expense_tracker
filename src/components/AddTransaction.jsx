
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../redux/expenseSlice";

function AddTransaction() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [category, setCategory] = useState("Salary");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount) {
      return;
    }

    dispatch(
      addTransaction({
        title,
        amount,
        type,
        category,
      })
    );

    setTitle("");
    setAmount("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-8 bg-white shadow-md rounded-lg p-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-5">
        Add Transaction
      </h2>

      <input
        type="text"
        placeholder="Transaction title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border border-gray-300 rounded-md p-3 mb-4 outline-none focus:border-blue-500"
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full border border-gray-300 rounded-md p-3 mb-4 outline-none focus:border-blue-500"
      />

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="w-full border border-gray-300 rounded-md p-3 mb-4 outline-none"
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full border border-gray-300 rounded-md p-3 mb-5 outline-none"
      >
        <option value="Salary">Salary</option>
        <option value="Food">Food</option>
        <option value="Bills">Bills</option>
        <option value="Shopping">Shopping</option>
        <option value="Transport">Transport</option>
      </select>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700"
      >
        Add Transaction
      </button>
    </form>
  );
}

export default AddTransaction;

