import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  FaHome,
  FaBriefcase,
  FaFolder,
  FaUser,
  FaLink,
} from "react-icons/fa";

function NavItem({ href, label, Icon, isActive }) {
  return (
    <Link
      href={href}
      className={`flex flex-col items-center justify-center px-4 py-2 rounded-full transition-colors hover:opacity-70 ${isActive ? 'text-[var(--accent-color)]' : 'text-[var(--text-primary)]'}`}
      aria-label={label}
    >
      <Icon className="h-6 w-6" />
    </Link>
  );
}

export function NavbarSimple() {
  const router = useRouter();

  return (
    <nav className="fixed bottom-4 left-0 right-0 z-50 flex justify-center">
      <div
        className="flex items-center gap-1 rounded-full backdrop-blur shadow-lg px-2 py-2 border border-[var(--border-color)]"
      >
        <NavItem href="/" label="Home" Icon={FaHome} isActive={router.pathname === "/"} />
        <NavItem href="/work" label="Work" Icon={FaBriefcase} isActive={router.pathname === "/work"} />
        <NavItem href="/projects" label="Projects" Icon={FaFolder} isActive={router.pathname === "/projects"} />
        <NavItem href="/about" label="About" Icon={FaUser} isActive={router.pathname === "/about"} />
        <NavItem href="/socials" label="Socials" Icon={FaLink} isActive={router.pathname === "/socials"} />
      </div>
    </nav>
  );
}
