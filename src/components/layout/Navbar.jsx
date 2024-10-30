import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const offset = 50;

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  const navLinks = [
    { name: "About", to: "skills" },
    { name: "Portfolio", to: "portfolio" },
    { name: "Contact", to: "contact" },
  ];

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-opacity-70 backdrop-blur-md">
      <div
        className="max-w-[1300px] mx-auto flex items-center justify-between h-20 
      px-12 text-xl text-gray-200"
      >
        <a href="#" className="font-bold">
          J.Doe
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex z-10 gap-12 cursor-pointer">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                smooth={true}
                offset={offset}
                duration={500}
                className="hover:text-purple-400 transition duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu */}
        <button
          onClick={toggleNav}
          className="md:hidden z-50 text-gray-200 hover:text-purple-400 transition duration-300"
          aria-label={nav ? "Close navigation menu" : "Open navigation menu"}
        >
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </button>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={nav ? "open" : "closed"}
          variants={menuVariants}
          className="fixed top-0 left-0 w-full min-h-screen z-40 bg-gray-900"
        >
          <ul className="text-center text-4xl font-semibold mt-24 space-y-8 cursor-pointer">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  onClick={closeNav}
                  smooth={true}
                  offset={offset}
                  duration={500}
                  className="hover:text-purple-400 transition duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;