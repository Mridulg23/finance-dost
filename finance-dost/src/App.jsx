import { useState, useEffect } from "react";
import SummaryCard from "./components/SummaryCard";
import TransactionTable from "./components/TransactionTable";
import RoleSwitcher from "./components/RoleSwitcher";
import Insights from "./components/Insights";
import AddTransaction from "./components/AddTransaction";

function App() {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  const [role, setRole] = useState("viewer");
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(data));
  }, [data]);

  const addTransaction = (t) => {
    setData([t, ...data]);
  };

  const income = data.filter(t => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = data.filter(t => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  return (
    <div className={dark ? "dark" : ""}>

      {/* Navbar */}
      <div className="navbar">
        <h2 className="logo">Finance Dost</h2>

        <div>
          <RoleSwitcher role={role} setRole={setRole} />
          <button onClick={() => setDark(!dark)}>
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      </div>

      <div className="container">

        {/* Empty State */}
        {data.length === 0 && (
          <div className="card">
            <p>No transactions yet. Add one 👇</p>
          </div>
        )}

        {/* Summary */}
        <div className="grid">
          <SummaryCard title="Balance" value={income - expense} />
          <SummaryCard title="Income" value={income} type="income" />
          <SummaryCard title="Expenses" value={expense} type="expense" />
        </div>

        {/* Admin Feature */}
        {role === "admin" && (
          <AddTransaction addTransaction={addTransaction} />
        )}

        {/* Insights */}
        <Insights data={data} />

        {/* Transactions */}
        <TransactionTable
          data={data}
          role={role}
          search={search}
          setSearch={setSearch}
          setData={setData}
        />

      </div>
    </div>
  );
}

export default App;