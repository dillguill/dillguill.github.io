import React from "react";
import { SunIcon, MoonIcon, ClockIcon } from "@heroicons/react/24/outline";

export function ThemeToggle() {
  const [theme, setTheme] = React.useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  });

  const [auto, setAuto] = React.useState(!localStorage.getItem("theme"));

  React.useEffect(() => {
    if (auto) {
      document.documentElement.classList.remove('light', 'dark');
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(systemDark ? "dark" : "light");
    } else {
      document.documentElement.classList.add(theme);
      document.documentElement.classList.remove(theme === 'dark' ? 'light' : 'dark');
    }
  }, [theme, auto]);

  React.useEffect(() => {
    const handleSystemThemeChange = (e) => {
      if (auto) {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, [auto]);

  const getIconColor = () => {
    return theme === "dark" ? "text-gray-100" : "text-gray-900";
  };

  return (
    <button
      onClick={() => {
        if (auto) {
          setAuto(false);
          const newTheme = theme === "dark" ? "light" : "dark";
          setTheme(newTheme);
          localStorage.setItem("theme", newTheme);
        } else if (theme === "dark") {
          setTheme("light");
          localStorage.setItem("theme", "light");
        } else {
          setAuto(true);
          localStorage.removeItem("theme");
        }
      }}
      className={`p-2 rounded-full transition-colors ${getIconColor()}`}
      aria-label="Toggle theme"
    >
      {auto ? (
        <ClockIcon className="h-6 w-6" />
      ) : theme === "dark" ? (
        <MoonIcon className="h-6 w-6" />
      ) : (
        <SunIcon className="h-6 w-6" />
      )}
    </button>
  );
}