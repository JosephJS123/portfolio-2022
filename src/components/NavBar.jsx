import { Link } from "react-scroll";

// react unicons
import Github from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import ResponsiveNavbar from "./ResponsiveNavbar";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className="flex fixed md:top-0 z-20 w-full justify-between bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500">
        <ul className="md:flex gap-16 ml-4 items-center hidden">
          <Link spy={true} to={"About"} smooth={true} activeClass="activeClass">
            <li className="font-bold uppercase text-2xl hover:text-white hover:cursor-pointer">
              About
            </li>
          </Link>
          <Link
            spy={true}
            to={"Technologies"}
            smooth={true}
            activeClass="activeClass"
          >
            <li className="font-bold uppercase text-2xl hover:text-white hover:cursor-pointer">
              Technologies
            </li>
          </Link>
          <Link
            spy={true}
            to={"Projects"}
            smooth={true}
            activeClass="activeClass"
          >
            <li className="font-bold uppercase text-2xl hover:text-white hover:cursor-pointer">
              Projects
            </li>
          </Link>
          <Link
            spy={true}
            to={"Contact"}
            smooth={true}
            activeClass="activeClass"
          >
            <li className="font-bold uppercase text-2xl hover:text-white hover:cursor-pointer">
              Contact me
            </li>
          </Link>
        </ul>

        <div
          className="px-4 cursor-pointer md:hidden"
          onClick={toggleOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 mt-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>

        <div className="flex gap-4 mr-4 items-center">
          <a href="https://github.com/JosephJS123" target="_blank">
            <Github size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/josephguerreromech%C3%A1n/"
            target="_blank"
          >
            <Linkedin size={40} />
          </a>
        </div>
      </nav>
      {isOpen && <ResponsiveNavbar toggleOpen={toggleOpen}/>}
    </>
  );
};

export default NavBar;
