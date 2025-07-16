import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative z-10 py-4 px-6 sm:px-12 w-full font-medium text-base sm:text-[1.3vw] text-black bg-white shadow">
      <div className="flex justify-between items-center">
        <div>
          <Link to={"/"}>
            <img className="w-32 sm:w-50 cursor-pointer" src="logo.png" alt="" />
          </Link>
        </div>
        {/* Hamburger Icon for Mobile */}
        <button
          className="sm:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-black mb-1 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black mb-1 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
        {/* Menu */}
        <ul className="hidden sm:flex space-x-6">
          <li><Link to="/" className="hover:text-red-600">Home</Link></li>
          <li><Link to="/about" className="hover:text-red-600">About</Link></li>
          <li><Link to="/dashboard" className="hover:text-red-600">Planner</Link></li>
          <li><Link to="/pricing" className="hover:text-red-600">Pricing</Link></li>
          <li><Link to="/team" className="hover:text-red-600">Team</Link></li>
          <li><Link to="/blog" className="hover:text-red-600">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-red-600">Contact</Link></li>
        </ul>
      </div>
      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="sm:hidden flex flex-col space-y-2  bg-white rounded-b m-2 shadow-lg p-4 absolute left-0 right-0 top-full w-full z-20 border-t border-gray-200">
          <li><Link to="/" className="hover:text-red-600" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" className="hover:text-red-600" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/dashboard" className="hover:text-red-600" onClick={() => setMenuOpen(false)}>Planner</Link></li>
          <li><Link to="/pricing" className="hover:text-red-600" onClick={() => setMenuOpen(false)}>Pricing</Link></li>
          <li><Link to="/team" className="hover:text-red-600" onClick={() => setMenuOpen(false)}>Team</Link></li>
          <li><Link to="/blog" className="hover:text-red-600" onClick={() => setMenuOpen(false)}>Blog</Link></li>
          <li><Link to="/contact" className="hover:text-red-600" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
