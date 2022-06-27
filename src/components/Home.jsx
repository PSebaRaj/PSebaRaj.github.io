import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl md:text-7xl text-gray-100">
            Hi! I'm Patrick SebaRaj!
          </h2>
          <p className="text-gray-400 py-4 max-w-md">
            I'm a Junior at Yale College studying Computer Science and
            Economics.
          </p>

          <div>
            <Link
              to="projects"
              smooth
              duration={400}
              className="group text-gray-100 w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-sky-500 via-sky-300 to-sky-500 animate-text cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={20} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
