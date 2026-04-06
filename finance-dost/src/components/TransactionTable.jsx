import { useState } from "react";

const TransactionTable = ({ data, role, search, setSearch, setData }) => {
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({});

  const filtered = data.filter(t =>
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleEdit = (t) => {
    setEditId(t.id);
    setEditData(t);
  };

  const handleSave = () => {
    const updated = data.map(t =>
      t.id === editId ? editData : t
    );
    setData(updated);
    setEditId(null);
  };

  return (
    <div className="card">
      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
            {role === "admin" && <th>Action</th>}
          </tr>
        </thead>

        <tbody>
          {filtered.map(t => (
            <tr key={t.id}>
              
              <td>
                {editId === t.id ? (
                  <input
                    value={editData.date}
                    onChange={(e) =>
                      setEditData({ ...editData, date: e.target.value })
                    }
                  />
                ) : t.date}
              </td>

              <td>
                {editId === t.id ? (
                  <input
                    value={editData.amount}
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        amount: Number(e.target.value)
                      })
                    }
                  />
                ) : (
                  <span className={t.type}>₹{t.amount}</span>
                )}
              </td>

              <td>
                {editId === t.id ? (
                  <input
                    value={editData.category}
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        category: e.target.value
                      })
                    }
                  />
                ) : t.category}
              </td>

              <td>
                {editId === t.id ? (
                  <select
                    value={editData.type}
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        type: e.target.value
                      })
                    }
                  >
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                  </select>
                ) : t.type}
              </td>

              {role === "admin" && (
                <td>
                  {editId === t.id ? (
                    <button onClick={handleSave}>Save</button>
                  ) : (
                    <button onClick={() => handleEdit(t)}>Edit</button>
                  )}
                </td>)
              }

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;