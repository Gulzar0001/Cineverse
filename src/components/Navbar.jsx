import React from 'react';
import { Link } from 'react-router-dom';
import logoimg from "../assets/logoimg.png";
import useVisibility from '../hooks/useVisibility';

function Navbar() {
  const { isVisible, show, hide } = useVisibility(false);

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[95%] 
      bg-white/20 backdrop-blur-md rounded-full border border-black px-6 py-4 z-50 
      flex justify-between items-center text-slate-200 text-xl font-semibold ">

      {/* Logo */}
      <div className='flex items-center space-x-2'>
        <img src={logoimg} alt="Logo" className='w-28 h-12 rounded-full' />
      </div>

      {/* Nav Links */}
      <div className='flex space-x-4 p-2 rounded-lg w-96 justify-between items-center'>
        <Link to="/" className="hover:text-white transition">Home</Link>
        <Link to="/movies" className="hover:text-white transition">Movies</Link>
        <Link to="/tv" className="hover:text-white transition">TV Shows</Link>
      </div>

      {/* Search Bar */}
      <div
        onMouseEnter={show}
        onMouseLeave={hide}
        className={`flex items-center transition-all duration-300 px-4 py-2 rounded-full ${
          isVisible ? "bg-black/30 backdrop-blur-sm w-96" : "w-12 justify-center"
        }`}
      >
        <span className="material-symbols-outlined text-slate-200 text-2xl font-semibold cursor-pointer hover:text-white transition">
          search
        </span>

        {isVisible && (
          <input
            type="text"
            placeholder="Search..."
            className="ml-2 bg-transparent outline-none text-slate-200 placeholder-slate-400 hover:text-white w-full transition text-xl font-semibold"
            autoFocus
          />
        )}
      </div>

      {/* Icons */}
      <div className='flex items-center justify-end space-x-6 w-96'>
        <span className="material-symbols-outlined text-slate-200 text-2xl font-semibold cursor-pointer hover:text-white transition">
          favorite
        </span>
        <span className="material-symbols-outlined text-slate-200 text-2xl font-semibold cursor-pointer hover:text-white transition">
          notifications
        </span>
        <span className="material-symbols-outlined text-slate-200 text-2xl font-semibold cursor-pointer hover:text-white transition">
          person
        </span>
      </div>
    </div>
  );
}

export default Navbar;
