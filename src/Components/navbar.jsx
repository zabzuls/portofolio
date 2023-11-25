import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const handleToggleClick = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <nav className='flex items-center lg:justify-between  lg:fixed min-w-full  top-0'>
      <h1 className='text-white ml-8 text-xl lg:text-3xl mt-5 fixed top-0 lg:static'>Zabzul <span className="text-indigo-500 text-xl lg:text-3xl">Supratman</span></h1>

      <button
        className="lg:hidden text-white text-3xl focus:outline-none fixed  right-0 top-0 mr-3 mt-5 "
        onClick={handleToggleClick}
      >
        &#9776;
      </button>

      <ul
        className={`lg:flex text-xl items-end p-11 justify-end  ${
          isNavOpen ? 'flex flex-col min-w-full' : 'hidden'
        }`}
      >
        <li className='text-white hover:text-blue-400'>
          <Link to="/" className='p-6' onClick={handleToggleClick}>
            Home
          </Link>
        </li>
        <li className='text-white hover:text-blue-400 scroll-smooth'>
          <a href="#projects">Projects</a>
        </li>
        {/* <li className='text-white hover:text-blue-400'>
          <Link to="/projects" className='p-6' onClick={handleToggleClick}>
            Projects
          </Link>
        </li> */}
        <li className='text-white hover:text-blue-400'>
          <Link to="/about" className='p-6' onClick={handleToggleClick}>
            About
          </Link>
        </li>
        <li className='text-white hover:text-blue-400'>
          <Link to="/contact" className='p-6 lg:mr-10' onClick={handleToggleClick}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
