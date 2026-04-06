const RoleSwitcher = ({ role, setRole }) => {
  return (
    <select
      value={role}
      onChange={(e) => setRole(e.target.value)}
      className="border dark:border-gray-700 p-1 rounded bg-transparent"
    >
      <option value="viewer">Viewer</option>
      <option value="admin">Admin</option>
    </select>
  );
};

export default RoleSwitcher;