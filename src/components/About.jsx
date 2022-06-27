import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-gray-100"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            About
          </p>
        </div>
        <p className="text-xl mt-20">I'm a person.</p>
        <br />
        <p className="text-xl"> 2nd paragarph we be talkin about stuff yk</p>
      </div>
    </div>
  );
};

export default About;
