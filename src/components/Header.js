import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from 'next-themes';

export default function Header() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
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
    <header className="fixed top-0 left-0 right-0 z-30 h-11 flex items-center justify-between px-[22px] border-b border-[var(--border-color)] bg-[var(--header-bg)] text-[var(--text-primary)]" style={{ backdropFilter: 'blur(14px)', backgroundColor: 'var(--header-bg)' }}>
      {/* Left side - Monogram */}
      <div className="flex items-center gap-3">
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '12px', letterSpacing: '0.06em' }}>DG</span>
        <span className="opacity-30">/</span>
        <span className="hidden md:block text-[12px] tracking-[0.1em]">Dillon Guillory</span>
        {/* Mobile breadcrumb - show full name when on homepage, truncate on subpages */}
        <span className="md:hidden flex items-center text-[11px] tracking-[0.08em]">
          {getBreadcrumbs().map((breadcrumb, index) => (
            <React.Fragment key={breadcrumb.path}>
              {index > 0 && <span className="mx-3 opacity-30">/</span>}
              <Link href={breadcrumb.path} className="hover:opacity-70 transition-opacity">
                {index === 0 ? "Dillon Guillory" : truncateName(breadcrumb.name, 14)}
              </Link>
            </React.Fragment>
          ))}
        </span>
      </div>

      {/* Right side - varies by breakpoint */}
      <div className="flex items-center gap-4">
        {/* Desktop nav links */}
<nav className="hidden md:flex items-center gap-4">
          <Link href="/" className="text-[12px] tracking-[0.14em] uppercase text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Home</Link>
          <Link href="/projects" className="text-[12px] tracking-[0.14em] uppercase text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Projects</Link>
          <Link href="/about" className="text-[12px] tracking-[0.14em] uppercase text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">About</Link>
        </nav>

        <span className="hidden md:inline opacity-30 text-[11px]">|</span>
        
        {/* Clock */}
        <span className="text-[11px] tracking-[0.08em] opacity-65" suppressHydrationWarning>
          {getTimeString()}
        </span>

        <span className="hidden md:inline opacity-30 text-[11px]">|</span>

        {/* Desktop theme toggle */}
        {mounted && (
          <button
            onClick={handleThemeToggle}
            className="hidden md:inline text-[10px] tracking-[0.18em] uppercase cursor-pointer bg-none border-none text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        )}
      </div>
    </header>
  );
}