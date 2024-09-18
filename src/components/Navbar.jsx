import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <header className="fixed w-full z-10 py-4 bg-tertiary shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <div className="container flex flex-row justify-between items-center">
        <div>
          <h1 className="font-semibold text-3xl text-secondary">BankWorth</h1>
        </div>
        <nav className="flex max-md:hidden gap-10 text-secondary font-semibold text-lg ">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-primary duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-primary duration-300 ease-in-out"
          >
            About
          </Link>
          <Link
            to="features"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-primary duration-300 ease-in-out"
          >
            Features
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-primary duration-300 ease-in-out"
          >
            Contact
          </Link>
        </nav>
        <div className="md:hidden" onClick={handleNav}>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div
          className={
            nav
              ? "fixed right-0 top-11 w-[50%] z-10 h-full bg-tertiary text-secondary ease-in-out duration-500"
              : "fixed right-[-100%]"
          }
        >
          <nav className="inline-grid p-5 text-1xl uppercase">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-primary duration-300 ease-in-out p-4 border-b-2  border-primary"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-primary duration-300 ease-in-out p-4 border-b-2 border-primary"
            >
              About
            </Link>
            <Link
              to="features"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-primary duration-300 ease-in-out p-4 border-b-2 border-primary"
            >
              Features
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-primary duration-300 ease-in-out p-4 border-b-2 border-primary"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
