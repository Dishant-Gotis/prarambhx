"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "prarambhx-theme";

type Theme = "dark" | "light";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "light") {
    root.classList.add("theme-light");
  } else {
    root.classList.remove("theme-light");
  }
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = (localStorage.getItem(STORAGE_KEY) as Theme | null) ?? "dark";
    setTheme(saved);
    applyTheme(saved);
  }, []);

  const nextTheme: Theme = theme === "light" ? "dark" : "light";

  const handleToggle = () => {
    setTheme(nextTheme);
    localStorage.setItem(STORAGE_KEY, nextTheme);
    applyTheme(nextTheme);
  };

  return (
    <button
      type="button"
      className="theme-toggle-button"
      onClick={handleToggle}
      aria-label={`Switch to ${nextTheme} theme`}
      title={`Switch to ${nextTheme} theme`}
    >
      {nextTheme === "light" ? "Light" : "Dark"}
    </button>
  );
}
