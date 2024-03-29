import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { FiExternalLink } from "react-icons/fi";

const NavBar = () => {
  const [burger, setBurger] = useState(false);
  const [external, setExternal] = useState(false);

  const links = [
    {
      id: 1,
      linkLabel: "home",
    },
    {
      id: 2,
      linkLabel: "about",
    },
    {
      id: 3,
      linkLabel: "projects",
    },
    {
      id: 4,
      linkLabel: "technologies",
    },
    {
      id: 5,
      linkLabel: "contact",
    },
  ];

  const externalLinks = [
    {
      id: 1,
      label: "Github",
      href: "https://github.com/PSebaRaj",
    },
    {
      id: 2,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sebaraj/",
    },
    {
      id: 3,
      label: "Email",
      href: "mailto:patrick.sebaraj@yale.edu",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h20 text-gray-100 fixed px-4 py-1">
      <div>
        <div
          class="text-5xl font-semibold
            bg-gradient-to-r bg-clip-text  text-transparent ml-2
            from-sky-500 via-gray-100 to-sky-500
            animate-text duration-300
            "
        >
          PS
        </div>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, linkLabel }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-110 hover:text-gray-100 duration-200"
          >
            <Link to={linkLabel} smooth duration={400}>
              {linkLabel}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setExternal(!external)}
        className="cursor-pointer pl-32 z-10 text-gray-400 md:hidden hover:scale-110 hover:text-gray-100 duration-200"
      >
        {external ? <FaTimes size={30} /> : <FiExternalLink size={30} />}
      </div>

      <div
        onClick={() => setBurger(!burger)}
        className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden hover:scale-110 hover:text-gray-100 duration-200"
      >
        {burger ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {external && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400">
          {externalLinks.map(({ id, label, href }) => (
            <li className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-110 hover:text-gray-100 duration-200">
              <a
                onClick={() => setExternal(!external)}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}

      {burger && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400">
          {links.map(({ id, linkLabel }) => (
            <li className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-110 hover:text-gray-100 duration-200">
              <Link
                onClick={() => setBurger(!burger)}
                to={linkLabel}
                smooth
                duration={400}
              >
                {linkLabel}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
