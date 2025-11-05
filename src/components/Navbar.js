import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  BriefcaseIcon,
  FolderIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

function NavItem({ to, label, Icon, isActive }) {
  return (
    <Link
      to={to}
      className={`flex flex-col items-center justify-center px-4 py-2 rounded-full transition-colors ${
        isActive
          ? "text-blue-600 dark:text-blue-400"
          : "text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
      }`}
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
      <div className="flex items-center gap-1 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur shadow-lg ring-1 ring-black/5 dark:ring-white/10 px-2 py-2">
        <NavItem to="/" label="Home" Icon={HomeIcon} isActive={location.pathname === "/"} />
        <NavItem to="/work" label="Work" Icon={BriefcaseIcon} isActive={location.pathname === "/work"} />
        <NavItem to="/projects" label="Projects" Icon={FolderIcon} isActive={location.pathname === "/projects"} />
        <NavItem to="/about" label="About" Icon={UserIcon} isActive={location.pathname === "/about"} />
      </div>
    </nav>
  );
}