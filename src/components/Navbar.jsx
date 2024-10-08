import { Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex flex-col sm:flex-row items-center justify-between w-full p-3 md:p-5 border-b bg-white">
      <div className="flex items-center justify-between w-full sm:w-auto">
        <img src="/logo.png" alt="logo" className="h-10 sm:hidden" />
        <img src="/logo.png" alt="logo" className="hidden sm:block md:w-32" />
      </div>
      <ul className="flex items-center gap-8 w-full justify-center sm:justify-end sm:w-auto">
        <Link to="/" className="flex gap-1 text-orange-500 hover:text-orange-700">
          <span className="font-bold hidden md:block">Home</span>
        </Link>
        <Link to="/favorites" className="flex gap-1 text-orange-500 hover:text-orange-700">
          <Heart size="24" />
          <span className="font-bold hidden md:block">Favorites</span>
        </Link>
        <Link to="/popular" className="flex gap-1 text-orange-500 hover:text-orange-700">
          <Star size="24" />
          <span className="font-bold hidden md:block">Popular</span>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
