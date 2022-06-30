import React from "react";
import project1 from "../assets/portfolioPhotos/proj1.png";
import project2 from "../assets/portfolioPhotos/proj2.png";
import project3 from "../assets/portfolioPhotos/proj3.png";
import project4 from "../assets/portfolioPhotos/proj4.png";
import project5 from "../assets/portfolioPhotos/proj5.png";
import project6 from "../assets/portfolioPhotos/proj6.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: project1,
      name: "PBay",
      href: "https://github.com/PSebaRaj/pBay",
    },
    {
      id: 2,
      src: project2,
      name: "TradingPlatform",
      href: "https://github.com/PSebaRaj/TradingPlatform",
    },
    {
      id: 3,
      src: project3,
      name: "VideoMemories",
      href: "https://www.google.com",
    },
    {
      id: 4,
      src: project4,
      name: "WebChat",
      href: "https://github.com/PSebaRaj/Chat",
    },
    {
      id: 5,
      src: project5,
      name: "StockAPI",
      href: "https://github.com/PSebaRaj/StockMarketAPI",
    },
    {
      id: 6,
      src: project6,
      name: "Portfolio",
      href: "https://github.com/PSebaRaj/PSebaRaj.github.io",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-gray-100 md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            Projects
          </p>
          <p className="py-6">A selection of my non-coursework projects:</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, name, href }) => (
            <div>
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <a href={name} target="_blank" rel="noopener noreferrer">
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
    </div>
  );
};

export default Projects;
