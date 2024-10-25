import { HomeIcon, UserIcon, BriefcaseIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-30 flex justify-between p-4 md:p-6 bg-opacity-40 backdrop-blur-lg">
  <div className="text-xl md:text-2xl font-bold">MyPortfolio</div>
  <ul className="flex space-x-4 md:space-x-6 text-sm md:text-base">
    <li className="flex items-center space-x-1">
      <HomeIcon className="h-4 w-4 md:h-5 md:w-5" />
      <a href="#home" className="hover:underline">Home</a>
    </li>
    <li className="flex items-center space-x-1">
      <UserIcon className="h-4 w-4 md:h-5 md:w-5" />
      <a href="#about" className="hover:underline">About</a>
    </li>
  </ul>
</nav>
  );
};

export default Navbar;