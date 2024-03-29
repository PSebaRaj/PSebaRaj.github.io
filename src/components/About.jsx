import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-gray-100"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl inline border-b-4 border-gray-400">About Me</p>
        </div>
        <p className="md:text-xl mt-10">
          I'm a senior at Yale pursuing a B.S. in Computer Science and Economics
          (Double Major), and I'm interested in the intersection of the two
          fields. I've been passionate about all things computers for as long as
          I can remember, and I've found and strengthened my passion for
          economics at college. I've previously interned at Amazon (AWS), NASA,
          and Palnar.
        </p>
        <br />
        <p className="md:text-xl">
          {" "}
          At Yale, I've been able to explore these fields by taking courses such
          as Building Distributed Systems (CPSC 426), Mathematical Economics:
          Game Theory (ECON 351), Global Financial Crisis (MGT 890), and
          Econometrics (ECON 136), while exploring beyond these fields with
          courses such as Electronic Dance Music (MUSI 290), Military History of
          the West Since 1500 (HIST 221), and History of World History (HIST
          072).
        </p>
        <br />
        <p className="md:text-xl">
          {" "}
          Beyond this, I'm involved in extracurriculars such as the Yale Daily
          News and the Morse College Council, and I'm interested in Formula 1
          (Red Bull Racing), tennis, soccer (Chelsea), and EDM.
        </p>
      </div>
    </div>
  );
};

export default About;
