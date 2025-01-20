import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars2Icon, XMarkIcon, SunIcon, MoonIcon, ClockIcon } from "@heroicons/react/24/outline";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" className="p-1 font-medium">
        <a href="/" className="flex items-center transition-colors duration-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 px-2 py-1">
          Home
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <a href="/about" className="flex items-center transition-colors duration-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 px-2 py-1">
          About
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <a href="/projects" className="flex items-center transition-colors duration-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 px-2 py-1">
          Projects
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <a href="/resume" className="flex items-center transition-colors duration-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 px-2 py-1">
          Resume
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <a href="/contact" className="flex items-center transition-colors duration-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 px-2 py-1">
          Contact
        </a>
      </Typography>
    </ul>
  );
}

function ThemeToggle() {
  const [theme, setTheme] = React.useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme; // Use saved theme if available
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"; // Default to system preference
  });

  const [auto, setAuto] = React.useState(!localStorage.getItem("theme")); // Auto mode enabled if no manual theme set

  React.useEffect(() => {
    if (auto) {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle("dark", systemDark);
    } else {
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  }, [theme, auto]);

  React.useEffect(() => {
    const handleSystemThemeChange = (e) => {
      if (auto) {
        document.documentElement.classList.toggle("dark", e.matches);
      }
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [auto]);

  return (
    <button
      onClick={() => {
        if (auto) {
          setAuto(false); // Disable auto mode if active
          const newTheme = theme === "dark" ? "light" : "dark";
          setTheme(newTheme);
          localStorage.setItem("theme", newTheme);
        } else if (theme === "dark") {
          setTheme("light");
          localStorage.setItem("theme", "light");
        } else {
          setAuto(true); // Re-enable auto mode
          localStorage.removeItem("theme");
        }
      }}
      className="p-2 rounded-full text-gray-900 dark:text-gray-100"
      aria-label="Toggle theme"
    >
      {auto ? (
        <ClockIcon className="h-6 w-6" /> // Show Clock icon for auto mode
      ) : theme === "dark" ? (
        <MoonIcon className="h-6 w-6" /> // Show Moon icon for dark mode
      ) : (
        <SunIcon className="h-6 w-6" /> // Show Sun icon for light mode
      )}
    </button>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="my-4 mx-auto max-w-screen-xxl px-6 py-3 bg-transparent">
      <div className="flex items-center justify-between">
        <Typography
          as="a"
          href="/"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 text-gray-900 dark:text-gray-100"
        >
          Portfolio
        </Typography>
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <NavList />
          <ThemeToggle /> {/* Add ThemeToggle for large screens */}
        </div>
        <div className="flex items-center lg:hidden">
          <ThemeToggle /> {/* Add ThemeToggle for small screens */}
          <IconButton
            variant="text"
            className="ml-2 h-6 w-6"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon
                className="h-6 w-6 text-gray-900 dark:text-gray-100"
                strokeWidth={2}
              />
            ) : (
              <Bars2Icon
                className="h-6 w-6 text-gray-900 dark:text-gray-100"
                strokeWidth={2}
              />
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
