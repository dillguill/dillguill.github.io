import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaCircle } from "react-icons/fa";
import { getInitialTheme, applyTheme, THEMES } from '../utils/theme';

export default function Header() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [theme, setTheme] = useState(THEMES.LIGHT);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  // Prevent hydration mismatch
  useEffect(() => {
    setTheme(getInitialTheme());
    setMounted(true);
  }, []);

  // Update clock
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Apply theme changes
  useEffect(() => {
    if (mounted) {
      applyTheme(theme);
    }
  }, [theme, mounted]);

  // Listen for system theme changes (only auto-switch if no manual preference)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      const stored = localStorage.getItem('theme');
      if (!stored) {
        setTheme(e.matches ? THEMES.DARK : THEMES.LIGHT);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleThemeToggle = () => {
    setTheme(prev => prev === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK);
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
    const pathSegments = router.pathname
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
      className="fixed top-0 left-0 right-0 z-50 text-[var(--text-primary)] bg-[var(--bg-primary)] border-b border-[var(--border-color)]"
    >
      <div className="mx-auto max-w-screen-xxl px-6 py-3 flex items-center justify-between">
        <nav>
          <ul className="flex items-center space-x-1 text-sm sm:text-base">
            {getBreadcrumbs().map((breadcrumb, index) => (
              <li key={breadcrumb.path} className="flex items-center">
                <Link
                  href={breadcrumb.path}
                  className="transition-colors duration-200 hover:opacity-70 text-[var(--text-primary)]"
                >
                  {index === 0 ? breadcrumb.name : truncateName(breadcrumb.name, 14)}
                </Link>
                {index < getBreadcrumbs().length - 1 && (
                  <span className="mx-2 text-[var(--text-secondary)]">
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
            className="p-2 rounded-full text-[var(--text-primary)]"
            aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
          >
            <FaCircle className="w-4 h-4" />
          </button>
          <div
            className="text-sm sm:text-base text-[var(--text-primary)]"
            suppressHydrationWarning
          >
            {getTimeString()}
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-[var(--border-color)]"></div>
    </header>
  );
}
