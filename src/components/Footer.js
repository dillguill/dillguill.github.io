import React from "react";
import { Typography } from "@material-tailwind/react";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaDribbble } from "react-icons/fa";
 
const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"],
  },
  {
    title: "Resource",
    items: ["Blog", "Newsletter", "Events", "Help center"],
  },
];
 
const currentYear = new Date().getFullYear();
 
export default function Footer() {
  return (
    <footer className="relative w-full" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <div className="my-4 mx-auto max-w-screen-xxl px-6 py-3">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <Typography variant="h5" className="mb-6" style={{ color: 'var(--text-primary)' }}>
            My Portfolio
          </Typography>
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  className="mb-3 font-medium"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      className="py-1.5 font-normal transition-colors hover:opacity-70"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div 
          className="mt-12 flex w-full flex-col items-center justify-center py-4 md:flex-row md:justify-between"
          style={{ borderTop: '1px solid var(--border-color)' }}
        >
          <Typography
            variant="small"
            className="mb-4 text-center font-normal md:mb-0"
            style={{ color: 'var(--text-secondary)' }}
          >
            &copy; {currentYear} <a href="https://material-tailwind.com/" style={{ color: 'var(--accent-color)' }}>My Portfolio</a>. All
            Rights Reserved.
          </Typography>
          <div className="flex gap-4 sm:justify-center">
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100" style={{ color: 'var(--text-primary)' }}>
              <FaFacebook className="h-5 w-5" />
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100" style={{ color: 'var(--text-primary)' }}>
              <FaInstagram className="h-5 w-5" />
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100" style={{ color: 'var(--text-primary)' }}>
              <FaTwitter className="h-5 w-5" />
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100" style={{ color: 'var(--text-primary)' }}>
              <FaGithub className="h-5 w-5" />
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100" style={{ color: 'var(--text-primary)' }}>
              <FaDribbble className="h-5 w-5" />
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}
