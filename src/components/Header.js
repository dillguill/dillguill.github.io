import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCircle } from "react-icons/fa";

// Theme utility functions
const getStoredTheme = () => localStorage.getItem('theme');
const setStoredTheme = (theme) => localStorage.setItem('theme', theme);
const getSystemTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const getInitialTheme = () => {
  const stored = getStoredTheme();
  if (stored) return stored;
  return getSystemTheme();
};

export default function Header() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [theme, setTheme] = useState(getInitialTheme);
  const location = useLocation();

  // Update clock
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Apply theme to DOM
  useEffect(() => {
    const root = document.documentElement;
    const isDark = theme === 'dark';

    // Apply classes
    root.classList.toggle('dark', isDark);
    root.style.colorScheme = theme;

    // Update meta tags
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.content = isDark ? '#0a0a0a' : '#EAE0D2';
    }

    const appleStatusBar = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
    if (appleStatusBar) {
      appleStatusBar.content = isDark ? 'black-translucent' : 'default';
    }

    // Persist preference
    setStoredTheme(theme);
  }, [theme]);

  // Listen for system theme changes (only if user hasn't manually set theme)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      // Only auto-switch if user hasn't manually set a preference
      const stored = getStoredTheme();
      if (!stored) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleThemeToggle = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  function getTimeString() {
    return currentTime.toLocaleTimeString('en-US', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
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
    <header 
      className="fixed top-0 left-0 right-0 z-50"
      style={{ 
        color: 'var(--text-primary)',
        backgroundColor: 'var(--bg-primary)',
        borderBottomColor: 'var(--border-color)'
      }}
    >
      <div className="mx-auto max-w-screen-xxl px-6 py-3 flex items-center justify-between">
        <nav>
          <ul className="flex items-center space-x-1 text-sm sm:text-base">
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
        <div className="flex items-center space-x-0">
          <button
            onClick={handleThemeToggle}
            className="p-2 rounded-full"
            aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
            style={{ color: 'var(--text-primary)' }}
          >
            <FaCircle className="w-4 h-4" />
          </button>
          <div 
            className="text-sm sm:text-base" 
            style={{ color: 'var(--text-primary)' }} 
            suppressHydrationWarning
          >
            {getTimeString()}
          </div>
        </div>
      </div>
      <div className="w-full h-px" style={{ backgroundColor: 'var(--border-color)' }}></div>
    </header>
  );
}
