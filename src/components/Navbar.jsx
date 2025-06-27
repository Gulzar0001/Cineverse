import React, { useState } from 'react';
import logoimg from "../assets/logoimg.png";

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[95%] 
    bg-white/20 backdrop-blur-md rounded-full border border-black px-6 py-4 z-50 
    flex justify-between items-center text-slate-200 text-xl font-semibold ">

      <div className='flex items-center space-x-2'>
        <p>
          <img
            src={logoimg}
            alt="Logo"
            className='w-28 h-12 rounded-full'
          />
        </p>
      </div>

      <div className='flex space-x-4 p-2 rounded-lg w-96 justify-between items-center'>
        <p className="hover:text-white cursor-pointer transition">Home</p>
        <p className="hover:text-white cursor-pointer transition">Movies</p>
        <p className="hover:text-white cursor-pointer transition">TV Shows</p>
      </div>

      <div
        onMouseEnter={() => setShowSearch(true)}
        onMouseLeave={() => setShowSearch(false)}
        className={`flex items-center transition-all duration-300 px-4 py-2 rounded-full ${showSearch ? "bg-black/30 backdrop-blur-sm w-96" : "w-12 justify-center"}`}>
        
        <span className="material-symbols-outlined text-slate-200 text-2xl font-semibold cursor-pointer hover:text-white transition">
          search
        </span>

        {showSearch && (
          <input
            type="text"
            placeholder="Search..."
            className="ml-2 bg-transparent outline-none text-slate-200 placeholder-slate-400 hover:text-white w-full transition text-xl font-semibold"
            autoFocus
          />
        )}
      </div>

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
