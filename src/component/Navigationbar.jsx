import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import tasktribe from './tasktribe.png'
function Navigationbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header className="mb-2 px-1 shadow">
      <div className="relative mx-auto flex max-w-screen-lg flex-col py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link to="/" className="flex items-center text-2xl font-black" >
          <span className="mr-2 text-3xl text-blue-600">
            <img className="w-16 h-16" src={tasktribe }></img>
          </span>
          <span>TaskTribe</span>
        </Link>
        <input className="peer hidden" type="checkbox" id="navbar-open" checked={navbarOpen} onChange={() => setNavbarOpen(!navbarOpen)} />
        <label className="absolute right-0 mt-1 cursor-pointer text-xl sm:hidden" htmlFor="navbar-open">
          <span className="sr-only">Toggle Navigation</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512">
            <path fill="currentColor" d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" />
          </svg>
        </label>
        <nav aria-label="Header Navigation" className={`peer-checked:block hidden  pl-2 py-6 sm:block sm:py-0 ${navbarOpen ? 'block' : ''}`}>
          <ul className="flex flex-col text-end   gap-y-4 sm:flex-row sm:gap-x-8 mr-2">
          <li><Link to="/" className="text-gray-600 hover:text-blue-600" >Home</Link></li>
            <li><Link to="/pendingtask" className="text-gray-600 hover:text-blue-600" >Pending Tasks</Link></li>
            <li><Link to="/donetask"  className="text-gray-600 hover:text-blue-600" >Done Tasks</Link></li>
            <li><Link to="/calendar"  className="text-gray-600 hover:text-blue-600" >calendar</Link></li>
           
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navigationbar;
