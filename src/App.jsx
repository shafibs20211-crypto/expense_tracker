
import "./App.css";

import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
// import Summary from "./components/Summary";
import ExpenseChart from "./components/ExpenseChart";

function App() {
  return (
    <div className="app">
      <h1>Expense Tracker</h1>

      {/* <Summary /> */}

      <AddTransaction />

      <TransactionList />

      <ExpenseChart />
    </div>
  );
}

export default App;