// src/components/Navbar.js
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";
import { FaHome, FaBriefcase, FaFolder, FaUser } from "react-icons/fa";

function NavItem({ href, label, Icon, isActive }) {
  return (
    <Link
      href={href}
      className={`flex flex-col items-center justify-center px-4 py-2 rounded-full transition-colors hover:opacity-70 ${
        isActive ? "text-[var(--accent-color)]" : "text-[var(--text-primary)]"
      }`}
      aria-label={label}
    >
      <Icon className="h-6 w-6" />
    </Link>
  );
}

export function NavbarSimple() {
  const router     = useRouter();
  const controls   = useAnimation();
  const mountedRef = useRef(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    mountedRef.current = true;

    const handleScroll = () => {
      if (!mountedRef.current) return;
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        controls.start({ y: 100, opacity: 0, transition: { duration: 0.3 } });
      } else {
        controls.start({ y: 0, opacity: 1, transition: { duration: 0.3 } });
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      mountedRef.current = false;
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <motion.nav
      className="fixed bottom-4 left-0 right-0 z-50 flex justify-center"
      initial={{ y: 0, opacity: 1 }}
      animate={controls}
    >
      <div className="flex items-center gap-1 rounded-full backdrop-blur shadow-lg px-2 py-2 border border-[var(--border-color)]">
        <NavItem href="/" label="Home" Icon={FaHome} isActive={router.pathname === "/"} />
        <NavItem href="/resume" label="Resume" Icon={FaBriefcase} isActive={router.pathname === "/resume"} />
        <NavItem href="/projects" label="Projects" Icon={FaFolder} isActive={router.pathname === "/projects"} />
        <NavItem href="/about" label="About" Icon={FaUser} isActive={router.pathname === "/about"} />
      </div>
    </motion.nav>
  );
}