const Insights = ({ data }) => {
  const expenses = data.filter(d => d.type === "expense");

  if (expenses.length === 0) {
    return <div className="card">No insights yet</div>;
  }

  const highest = expenses.reduce((max, curr) =>
    curr.amount > (max?.amount || 0) ? curr : max, null
  );

  return (
    <div className="card">
      <h3>Insights</h3>
      <p>💸 Highest: {highest.category} (₹{highest.amount})</p>
      <p>📊 Total Transactions: {data.length}</p>
    </div>
  );
};

export default Insights;