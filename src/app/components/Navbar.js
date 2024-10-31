import { Bars2Icon } from '@heroicons/react/24/solid';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-30 flex justify-between p-4 md:p-6 bg-opacity-40 backdrop-blur-lg">
  <div className="text-xl md:text-2xl font-bold">MyPortfolio</div>
  <ul className="">
    <li className="">
      <Bars2Icon className="h-10 w-10 md:h-15 md:w-15" />
    </li>
  </ul>
</nav>
  );
};

export default Navbar;