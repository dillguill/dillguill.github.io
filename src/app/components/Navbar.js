import { HomeIcon, UserIcon, BriefcaseIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-30 flex justify-between p-6 bg-opacity-40 backdrop-blur-lg">
      <div className="text-xl">dillon guillory - full stack software developer</div>
      <ul className="flex space-x-6">
        <li className="flex items-center space-x-2">
          <HomeIcon className="h-5 w-5" />
          <a href="#home" className="hover:underline">Home</a>
        </li>
        <li className="flex items-center space-x-2">
          <UserIcon className="h-5 w-5" />
          <a href="#about" className="hover:underline">About</a>
        </li>
        <li className="flex items-center space-x-2">
          <BriefcaseIcon className="h-5 w-5" />
          <a href="#projects" className="hover:underline">Projects</a>
        </li>
        <li className="flex items-center space-x-2">
          <EnvelopeIcon className="h-5 w-5" />
          <a href="#contact" className="hover:underline">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;