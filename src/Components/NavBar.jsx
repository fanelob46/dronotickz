import { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <nav className="flex justify-between px-10 py-10">
        <h2 className="2xl:text-[40px]">D<span className="text-white">Z</span></h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-7 2xl:text-[32px] pt-5">
          <li>
            <a href="#Aboutus">ABOUT</a>
          </li>
          <li>
            <a href="#articles">ARTICLES</a>
          </li>
        </ul>

        <a href="#Subcription" className="hidden md:inline-block">
          <button type="button" className="border-2 border-black py-1 px-7 2xl:text-[32px]">SUBSCRIBE</button>
        </a>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col space-y-3 text-center text-[16px]">
          <li>
            <a href="#Aboutus">ABOUT</a>
          </li>
          <li>
            <a href="#articles">ARTICLES</a>
          </li>
          <li>
            <a href="#Subcription">
              <button type="button" className="border-2 border-black py-1 px-7">SUBSCRIBE</button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
