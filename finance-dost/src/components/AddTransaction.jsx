import { useState } from "react";

const AddTransaction = ({ addTransaction }) => {
  const [form, setForm] = useState({
    amount: "",
    category: "",
    type: "expense",
    date: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.amount || !form.category) return;

    addTransaction({
      ...form,
      id: Date.now(),
      amount: Number(form.amount)
    });

    setForm({ amount: "", category: "", type: "expense", date: "" });
  };

  return (
    <div className="card">
      <h3>Add Transaction</h3>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Amount"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
        />

        <input
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />

        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />

        <select
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTransaction;