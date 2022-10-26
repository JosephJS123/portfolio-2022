import { Link } from "react-scroll";

const ResponsiveNavbar = ({ toggleOpen }) => {
  return (
    <div className="text-center items-center fixed z-10 w-full md:hidden bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500">
      <ul>
        <Link spy={true} to={"Contact"} smooth={true} activeClass="activeClass">
          <li className="p-2 font-bold uppercase hover:text-white hover:cursor-pointer">
            Contact me
          </li>
        </Link>
        <Link spy={true} to={"About"} smooth={true} activeClass="activeClass">
          <li
            className="p-2 font-bold uppercase hover:text-white hover:cursor-pointer"
            onClick={toggleOpen}
          >
            About
          </li>
        </Link>
        <Link
          spy={true}
          to={"Technologies"}
          smooth={true}
          activeClass="activeClass"
        >
          <li
            className="p-2 font-bold uppercase hover:text-white hover:cursor-pointer"
            onClick={toggleOpen}
          >
            Technologies
          </li>
        </Link>
        <Link
          spy={true}
          to={"Projects"}
          smooth={true}
          activeClass="activeClass"
        >
          <li
            className="p-2 font-bold uppercase hover:text-white hover:cursor-pointer"
            onClick={toggleOpen}
          >
            Projects
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default ResponsiveNavbar;
