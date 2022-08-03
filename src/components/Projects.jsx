import React from "react";
import project1 from "../assets/portfolioPhotos/pbay.png";
import project2 from "../assets/portfolioPhotos/gogetitdone.png";
import project3 from "../assets/portfolioPhotos/tradingPlatform.png";
import project4 from "../assets/portfolioPhotos/tomatotimer.png";
import project5 from "../assets/portfolioPhotos/videomemories.png";
import project6 from "../assets/portfolioPhotos/portfolioPic.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: project1,
      name: "PBay",
      loc: "pBay",
      href: "https://github.com/PSebaRaj/pBay",
    },
    {
      id: 2,
      src: project2,
      name: "GoGetItDone",
      loc: "GoGetItDone",
      href: "https://github.com/PSebaRaj/GoGetItDone",
    },
    {
      id: 3,
      src: project3,
      name: "TradingPlatform",
      loc: "TradingPlatform",
      href: "https://github.com/PSebaRaj/TradingPlatform",
    },
    {
      id: 4,
      src: project5,
      name: "VideoMemories",
      loc: "VideoMemories",
      href: "https://github.com/PSebaRaj/VideoMemories",
    },
    {
      id: 5,
      src: project4,
      name: "TomatoTimer.nvim",
      loc: "tomatotimer.nvim",
      href: "https://github.com/PSebaRaj/tomatotimer.nvim",
    },

    {
      id: 6,
      src: project6,
      name: "Portfolio",
      loc: "",
      href: "https://github.com/PSebaRaj/PSebaRaj.github.io",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-gray-100 md:h-screen "
    >
	  <div className="md:hidden">
		<br />
		<br />
	  </div>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl inline border-b-4 border-gray-400">
            Projects
          </p>
          {/* <p className="py-6">A selection of my non-coursework projects:</p> */}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, name, loc, href }) => (
            <div>
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <a href={loc} target="_blank" rel="noopener noreferrer">
                  <img
                    src={src}
                    alt={name}
                    className="rounded-md duration-200 hover:scale-110"
                  />
                </a>
                <div className="flex item-center justify-center">
                  <p className="w-1/2 text-center px-4 py-2 ">{name}</p>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" w-1/2 text-center px-4 py-2 duration-200 hover:scale-110"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
	  <div className="md:hidden">
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
	  </div>
    </div>
  );
};

export default Projects;
