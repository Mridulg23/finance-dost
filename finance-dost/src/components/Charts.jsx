import { LineChart, Line, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from "recharts";

const Charts = ({ data }) => {
  const expenseData = data.filter(d => d.type === "expense");

  return (
    <div className="grid md:grid-cols-2 gap-4">
      
      <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-sm">
        <LineChart width={300} height={200} data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line dataKey="amount" />
        </LineChart>
      </div>

      <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-sm">
        <PieChart width={250} height={200}>
          <Pie data={expenseData} dataKey="amount" nameKey="category">
            {expenseData.map((_, i) => <Cell key={i} />)}
          </Pie>
        </PieChart>
      </div>

    </div>
  );
};

export default Charts;