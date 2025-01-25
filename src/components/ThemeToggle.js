import React from "react";
import { SunIcon, MoonIcon, ClockIcon } from "@heroicons/react/24/outline";
import { Helmet } from "react-helmet";

export function ThemeToggle() {
  const [theme, setTheme] = React.useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "auto";
  });

  React.useEffect(() => {
    const root = document.documentElement;
    const actualTheme = theme === "auto"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      : theme;

    root.classList.toggle("dark", actualTheme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => {
      if (prev === "light") return "dark";
      if (prev === "dark") return "auto";
      return "light";
    });
  };

  return (
    <>
      <Helmet>
        <meta 
          name="theme-color" 
          content={theme.startsWith("dark") ? "#333333" : "#f5f5f5"} 
        />
      </Helmet>

      <button
        onClick={toggleTheme}
        className="p-2 rounded-full transition-colors text-gray-900 dark:text-gray-100"
        aria-label="Toggle theme"
      >
        {theme === "auto" ? (
          <ClockIcon className="h-6 w-6" />
        ) : theme === "dark" ? (
          <MoonIcon className="h-6 w-6" />
        ) : (
          <SunIcon className="h-6 w-6" />
        )}
      </button>
    </>
  );
}