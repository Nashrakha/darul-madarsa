import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white p-4 fixed top-0 w-full z-50 bg-green-700">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/"> <img
          src="https://yt3.googleusercontent.com/tTk6W4SDnVODfST_CcBk2KvKQULjmyGFSYNIPfDv41qP-Qtzx86lfTSz9_Q_DpGgzT6CPKdC4g=s160-c-k-c0x00ffffff-no-rj"
          alt=""
          className="w-14 h-14 rounded-full"
        /></a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="/" className="text-white hover:text-gray-300">Home</a></li>
          <li><a href="/about" className="text-white hover:text-gray-300">About</a></li>
          <li><a href="/courses" className="text-white hover:text-gray-300">Courses</a></li>
          <li><a href="/teachers" className="text-white hover:text-gray-300">Teachers</a></li>
          <li><a href="/contact" className="text-white hover:text-gray-300">Contact</a></li>
          <li>
            <a href="/admission" className="text-white px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800">Admission</a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white focus:outline-none text-2xl">
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden bg-green-800 absolute w-full left-0 top-full transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col text-center space-y-4 p-4">
          <li><a href="/" className="text-white block py-2 hover:bg-green-600">Home</a></li>
          <li><a href="/about" className="text-white block py-2 hover:bg-green-600">About</a></li>
          <li><a href="/courses" className="text-white block py-2 hover:bg-green-600">Courses</a></li>
          <li><a href="/teachers" className="text-white block py-2 hover:bg-green-600">Teachers</a></li>
          <li><a href="/contact" className="text-white block py-2 hover:bg-green-600">Contact</a></li>
          <li>
            <a href="/admission" className="text-white block py-3 rounded-lg bg-blue-700 hover:bg-blue-800">Admission</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
