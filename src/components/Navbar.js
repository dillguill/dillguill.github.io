import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaBriefcase,
  FaFolder,
  FaUser,
  FaLink,
} from "react-icons/fa";

function NavItem({ to, label, Icon, isActive }) {
  return (
    <Link
      to={to}
      className="flex flex-col items-center justify-center px-4 py-2 rounded-full transition-colors hover:opacity-70"
      style={{ 
        color: isActive ? 'var(--accent-color)' : 'var(--text-primary)' 
      }}
      aria-label={label}
    >
      <Icon className="h-6 w-6" />
    </Link>
  );
}

export function NavbarSimple() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-4 left-0 right-0 z-50 flex justify-center">
      <div 
        className="flex items-center gap-1 rounded-full backdrop-blur shadow-lg px-2 py-2"
        style={{ 
          border: '1px solid var(--border-color)'
        }}
      >
        <NavItem to="/" label="Home" Icon={FaHome} isActive={location.pathname === "/"} />
        <NavItem to="/work" label="Work" Icon={FaBriefcase} isActive={location.pathname === "/work"} />
        <NavItem to="/projects" label="Projects" Icon={FaFolder} isActive={location.pathname === "/projects"} />
        <NavItem to="/about" label="About" Icon={FaUser} isActive={location.pathname === "/about"} />
        <NavItem to="/socials" label="Socials" Icon={FaLink} isActive={location.pathname === "/socials"} />
      </div>
    </nav>
  );
}