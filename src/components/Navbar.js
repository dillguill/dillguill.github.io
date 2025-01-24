import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" className="p-1 font-medium">
        <Link to="/" className="flex items-center transition-colors duration-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 px-2 py-1">
          Home
        </Link>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <Link to="/about" className="flex items-center transition-colors duration-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 px-2 py-1">
          About
        </Link>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <Link to="/projects" className="flex items-center transition-colors duration-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 px-2 py-1">
          Projects
        </Link>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <Link to="/resume" className="flex items-center transition-colors duration-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 px-2 py-1">
          Resume
        </Link>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <Link to="/contact" className="flex items-center transition-colors duration-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 px-2 py-1">
          Contact
        </Link>
      </Typography>
    </ul>
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
          className="mr-4 cursor-pointer py-1.5"
          style={{ color: 'var(--text-color)' }}
        >
          Portfolio
        </Typography>
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <NavList />
          <ThemeToggle />
        </div>
        <div className="flex items-center lg:hidden">
          <ThemeToggle />
          <IconButton
            variant="text"
            className="ml-2 h-6 w-6"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" style={{ color: 'var(--text-color)' }} strokeWidth={2} />
            ) : (
              <Bars2Icon className="h-6 w-6" style={{ color: 'var(--text-color)' }} strokeWidth={2} />
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