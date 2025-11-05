import React from "react";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-screen-xxl px-6 py-3 flex items-center justify-between">
        <a
          href="/"
          className="mr-4 cursor-pointer py-1.5 text-base font-medium"
          style={{ color: "var(--text-color)" }}
        >
          Dillon Guillory
        </a>
        <ThemeToggle />
      </div>
    </header>
  );
}


