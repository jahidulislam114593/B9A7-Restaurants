import { FaSearch, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md h-16 flex items-center justify-between px-6">
      <div className="text-2xl font-bold text-black">Recipe Calories</div>
      <ul className="flex space-x-6">
        <li className="text-lg text-gray-700 hover:text-black cursor-pointer">
          Home
        </li>
        <li className="text-lg text-gray-700 hover:text-black cursor-pointer">
          Recipes
        </li>
        <li className="text-lg text-gray-700 hover:text-black cursor-pointer">
          About
        </li>
        <li className="text-lg text-gray-700 hover:text-black cursor-pointer">
          Search
        </li>
      </ul>
      <div className="flex items-center space-x-4">
        <FaSearch
          className="text-gray-700 hover:text-black cursor-pointer"
          size={20}
        />
        <FaUserCircle className="text-green-500" size={24} />
      </div>
    </nav>
  );
};

export default Navbar;
