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
          <h2 className="text-4xl sm:text-4xl md:text-7xl text-gray-100 flex flex-wrap">
            Hi!&nbsp;I'm&nbsp;
            <div>
              <span className="hover:scale-110 hover:text-sky-400 duration-300">
                P
              </span>
              <span className="hover:scale-110 hover:text-sky-400 duration-300">
                a
              </span>
              <span className="hover:scale-110 hover:text-sky-400 duration-300">
                t
              </span>
              <span className="hover:scale-110 hover:text-sky-400 duration-300">
                r
              </span>
              <span className="hover:scale-110 hover:text-sky-400 duration-300">
                i
              </span>
              <span className="hover:scale-110 hover:text-sky-400 duration-300">
                c
              </span>
              <span className="hover:scale-110 hover:text-sky-400 duration-300">
                k
              </span>
            </div>
            &nbsp;
            <div>
              <span className="hover:scale-110 hover:text-sky-400 duration-300">
                S
              </span>
              <span className="hover:scale-110 hover:text-sky-400 duration-300">
                e
              </span>
              <span className="hover:scale-110 hover:text-sky-400 duration-300">
                b
              </span>
              <span className="hover:scale-110 hover:text-sky-400 duration-300">
                a
              </span>
              <span className="hover:scale-110 hover:text-sky-400 duration-300">
                R
              </span>
              <span className="hover:scale-110 hover:text-sky-400 duration-300">
                a
              </span>
              <span className="hover:scale-110 hover:text-sky-400 duration-300">
                j
              </span>
              !
            </div>
          </h2>
          <p className="text-gray-400 py-4 max-w-md">
            I'm a Senior at Yale College studying Computer Science and
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
