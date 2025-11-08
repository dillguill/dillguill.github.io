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

    // Apply theme classes based on manual override or system preference
    if (darkMode) {
      root.classList.add("dark");
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove("dark");
      root.style.colorScheme = 'light';
    }

    // Update meta theme-color for browser status bar
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.content = darkMode ? '#0a0a0a' : '#ffffff';
      console.log('Meta theme color updated to:', metaThemeColor.content); // Debug log
    }

    // Update apple status bar style for iOS PWA
    const appleStatusBar = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
    if (appleStatusBar) {
      appleStatusBar.content = darkMode ? 'black-translucent' : 'default';
    }
  }, [darkMode]);

  // Separate useEffect to clear saved preference only on mount (page refresh)
  useEffect(() => {
    // Clear any saved preference on mount (reset on page refresh)
    localStorage.removeItem("theme");
  }, []);

  const handleThemeToggle = () => {
    console.log('Theme toggle clicked, current darkMode:', darkMode); // Debug log
    setDarkMode(!darkMode);
  };

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
      <header className="fixed top-0 left-0 right-0 z-50"
              style={{ 
                color: 'var(--text-primary)',
                backgroundColor: 'var(--bg-primary)',
                borderBottomColor: 'var(--border-color)'
              }}>
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
              onClick={handleThemeToggle}
              className="p-2 rounded-full"
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
        <div className="w-full h-px" style={{ backgroundColor: 'var(--border-color)' }}></div>
      </header>
    </>
  );
}
