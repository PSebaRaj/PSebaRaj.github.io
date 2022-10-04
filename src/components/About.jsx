import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-gray-100"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl inline border-b-4 border-gray-400">
            About Me
          </p>
        </div>
        <p className="md:text-xl mt-10">
          I'm a student at Yale pursuring a B.S. in Computer Science and
          Economics, and I'm interested in the intersection of the two fields.
          I've been passionate about all things computers for as long as I can
          remember, and I've found and strengthened my passion for economics at
          college. I've previously interned at NASA and Palnar, and I'll
          be interning at Amazon for the summer of 2023.
        </p>
        <br />
        <p className="md:text-xl">
          {" "}
          At Yale, I've been able to explore these fields by taking courses like
          Systems Programming (CPSC 323), Computational Intelligence for Games
          (CPSC 474), and Econometrics (ECON 136), while exploring beyond these
          fields with courses like Electronic Dance Music (MUSI 290), Military
          History of the West Since 1500 (HIST 221), and History of World
          History (HIST 072).
        </p>
        <br />
        <p className="md:text-xl">
          {" "}
          Beyond this, I'm involved in extracurriculars such as the Yale Daily
          News and the Morse College Council, and am interested in Formula One,
          tennis, soccer, and EDM.
        </p>
      </div>
    </div>
  );
};

export default About;
