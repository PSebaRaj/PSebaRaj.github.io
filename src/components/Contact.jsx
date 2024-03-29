import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full md:h-screen bg-gradient-to-b from-black to-gray-800 text-gray-100"
    >
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
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl inline border-b-4 border-gray-400">Contact</p>
          <p className="md:text-xl py-6">
            I can be reached through the form below or emailed directly at
            patrick.sebaraj@yale.edu.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/cb690d5d-140b-42f4-82e2-e03e576b1cbb"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="p-2 bg-transparent border-2 rounded-md text-gray-100 focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-gray-100 focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Type your message here..."
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-gray-100 focus:outline-none"
            />
            <button className="text-gray-100 bg-gradient-to-r from-sky-500 via-sky-300 to-sky-500 px-6 py-3 my-8 mx-auto flex rounded-md items-center animate-text hover:scale-110 duration-300 cursor-pointer">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
