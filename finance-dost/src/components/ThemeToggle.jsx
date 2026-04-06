import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="border dark:border-gray-700 px-2 py-1 rounded"
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeToggle;