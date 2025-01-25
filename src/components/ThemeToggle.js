import React from "react";
import { SunIcon, MoonIcon, ClockIcon } from "@heroicons/react/24/outline";
import { Helmet } from "react-helmet";

export function ThemeToggle() {
  const [theme, setTheme] = React.useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "auto";
  });

  const currentColor = React.useMemo(() => {
    if (theme === "auto") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches 
        ? "#333333" 
        : "#f5f5f5";
    }
    return theme === "dark" ? "#333333" : "#f5f5f5";
  }, [theme]);

  React.useEffect(() => {
    const root = document.documentElement;
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    
    if (theme === "auto") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = (e) => {
        root.classList.toggle("dark", e.matches);
        metaThemeColor.content = e.matches ? "#333333" : "#f5f5f5";
      };
      mediaQuery.addListener(handler);
      return () => mediaQuery.removeListener(handler);
    } else {
      root.classList.toggle("dark", theme === "dark");
      metaThemeColor.content = currentColor;
    }
    
    localStorage.setItem("theme", theme);
  }, [theme, currentColor]);

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
          content={currentColor} 
          data-react-helmet="true" 
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