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
    <form onSubmit={handleSubmit}>
      <h2>Add Transaction</h2>

      <input
        type="text"
        placeholder="Transaction title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Salary">Salary</option>
        <option value="Food">Food</option>
        <option value="Bills">Bills</option>
        <option value="Shopping">Shopping</option>
        <option value="Transport">Transport</option>
      </select>

      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default AddTransaction;