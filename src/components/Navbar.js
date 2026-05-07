import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";
import { useTheme } from 'next-themes';
import {
  FaHome,
  FaBriefcase,
  FaFolder,
  FaUser,
  FaMoon,
  FaCircle,
} from "react-icons/fa";

function NavItem({ href, label, Icon, isActive }) {
  return (
    <Link
      href={href}
      className={`flex flex-col items-center justify-center px-3 py-2 transition-colors hover:opacity-70 ${isActive ? 'text-[var(--accent-color)]' : 'text-[var(--text-primary)]'}`}
      aria-label={label}
    >
      <Icon className="h-5 w-5" />
    </Link>
  );
}

export function NavbarSimple() {
  const router = useRouter();
  const controls = useAnimation();
  const [lastScrollY, setLastScrollY] = useState(0);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        controls.start({ y: 100, opacity: 0, transition: { duration: 0.3 } });
      } else {
        controls.start({ y: 0, opacity: 1, transition: { duration: 0.3 } });
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, controls]);

  const handleThemeToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.nav
      className="fixed bottom-4 left-0 right-0 z-50 flex justify-center md:hidden"
      initial={{ y: 0, opacity: 1 }}
      animate={controls}
    >
      <div className="flex items-center gap-1 rounded-full backdrop-blur-md shadow-lg px-3 py-2 border border-[var(--border-color)]" style={{ backgroundColor: 'var(--glass-bg)' }}>
        <NavItem href="/" label="Home" Icon={FaHome} isActive={router.pathname === "/"} />
        <NavItem href="/resume" label="Resume" Icon={FaBriefcase} isActive={router.pathname === "/resume"} />
        <NavItem href="/projects" label="Projects" Icon={FaFolder} isActive={router.pathname === "/projects" || router.pathname.startsWith("/projects/")} />
        <NavItem href="/about" label="About" Icon={FaUser} isActive={router.pathname === "/about"} />
        <span className="w-px h-5 bg-[var(--border-color)] opacity-50 mx-1"></span>
        {mounted && (
          <button
            onClick={handleThemeToggle}
            className="flex items-center justify-center px-3 py-2 text-[var(--text-primary)] hover:opacity-70 transition-opacity"
            aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === 'dark' ? <FaCircle className="h-4 w-4" /> : <FaMoon className="h-4 w-4" />}
          </button>
        )}
      </div>
    </motion.nav>
  );
}