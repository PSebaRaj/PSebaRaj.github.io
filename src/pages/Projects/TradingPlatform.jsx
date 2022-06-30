import React from "react";

const TradingPlatform = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-800 w-full text-gray-100 md:h-screen ">
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

        <p className="px-4 capitalize font-medium text-gray-400 hover:scale-110 hover:text-gray-100 duration-200">
          Trading Platform
        </p>
      </div>
    </div>
  );
};

export default TradingPlatform;
