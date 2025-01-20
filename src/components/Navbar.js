import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        className="p-1 font-medium"
      >
        <a href="/" className="flex items-center hover:underline">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-medium"
      >
        <a href="/about" className="flex items-center hover:underline">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-medium"
      >
        <a href="/projects" className="flex items-center hover:underline">
          Projects
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-medium"
      >
        <a href="/contact" className="flex items-center hover:underline">
          Contact
        </a>
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
    <Navbar className="mx-auto max-w-screen-xl px-6 py-3 bg-transparent">
      <div className="flex items-center justify-between">
        <Typography
          as="a"
          href="/"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          Portfolio
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6 text-gray-900 dark:text-gray-100" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6 text-gray-900 dark:text-gray-100" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}