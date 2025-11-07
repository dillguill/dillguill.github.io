import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCircle } from "react-icons/fa";

export default function Header() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [darkMode, setDarkMode] = useState(() => {
    // Always detect system preference on page refresh (reset saved preference)
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark;
  });
  const location = useLocation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    
    // Apply theme classes based on manual override or system preference
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    
    // Update meta theme color using CSS variable
    if (metaThemeColor) {
      const bgPrimary = getComputedStyle(root).getPropertyValue('--bg-primary').trim();
      metaThemeColor.content = bgPrimary;
    }
    
    // Clear any saved preference on mount (reset on page refresh)
    localStorage.removeItem("theme");
  }, [darkMode]);

  function getTimeString() {
    return (
      currentTime.getHours().toString().padStart(2, "0") +
      ":" +
      currentTime.getMinutes().toString().padStart(2, "0") +
      ":" +
      currentTime.getSeconds().toString().padStart(2, "0")
    );
  }

  function getBreadcrumbs() {
    const pathSegments = location.pathname
      .split("/")
      .slice(0, 2)
      .filter((segment) => segment !== "");
    let breadcrumbs = [{ name: "Dillon Guillory", path: "/" }];

    pathSegments.forEach((segment, index) => {
      breadcrumbs.push({
        name: segment.charAt(0).toUpperCase() + segment.slice(1),
        path: "/" + pathSegments.slice(0, index + 1).join("/"),
      });
    });

    return breadcrumbs;
  }

  function truncateName(name, maxLength) {
    return name.length > maxLength ? name.slice(0, maxLength) + "..." : name;
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 backdrop-blur-md" style={{ color: 'var(--text-primary)' }}>
        <div className="mx-auto max-w-screen-xxl px-6 py-3 flex items-center justify-between">
          <nav>
            <ul className="flex items-center space-x-2 text-sm sm:text-base">
              {getBreadcrumbs().map((breadcrumb, index) => (
                <li key={breadcrumb.path} className="flex items-center">
                  <Link
                    to={breadcrumb.path}
                    className="transition-colors duration-200 hover:opacity-70"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {index === 0 ? breadcrumb.name : truncateName(breadcrumb.name, 14)}
                  </Link>
                  {index < getBreadcrumbs().length - 1 && (
                    <span className="mx-2" style={{ color: 'var(--text-secondary)' }}>
                      /
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => {
                setDarkMode(!darkMode);
              }}
              className="p-2 rounded-full transition-colors duration-300"
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
              style={{ color: 'var(--text-primary)' }}
            >
              <FaCircle className="w-4 h-4" />
            </button>
            <div className="text-sm sm:text-base" style={{ color: 'var(--text-primary)' }} suppressHydrationWarning>
              {getTimeString()}
            </div>
          </div>
        </div>
        <div className="w-full h-px transition-colors duration-300" style={{ backgroundColor: 'var(--border-color)' }}></div>
      </header>
    </>
  );
}


