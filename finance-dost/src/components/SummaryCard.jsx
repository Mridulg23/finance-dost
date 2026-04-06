const SummaryCard = ({ title, value, type }) => {
  const color =
    type === "income"
      ? "text-green-500"
      : type === "expense"
      ? "text-red-500"
      : "";

  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-sm">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className={`text-xl font-semibold ${color}`}>
        ₹ {value}
      </h2>
    </div>
  );
};

export default SummaryCard;