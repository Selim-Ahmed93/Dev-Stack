import Logo from "../assets/logo-text.png";

const Navbar = () => {

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="flex justify-between container mx-auto">
        <img src={Logo} alt="logo" />
        <ul className="flex gap-4 items-center">
          <li>Home</li>
          <li>Technology</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="flex items-center space-x-3">
          <button className="text-white-700 font-medium text-sm px-3 py-2 rounded-lg transition-colors">
            Sign In
          </button>
          <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-white text-sm font-medium px-4 py-1 rounded-full shadow-md hover:opacity-95 transition-all">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
