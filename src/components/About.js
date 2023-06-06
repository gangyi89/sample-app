import React from "react";

const About = () => {  

  return (
    <div className="text-black">
      <div className="max-w-[800p] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#1e40af] font-bold p-2">ROUTER DOM TEST</p>
        {/* <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data.
        </h1> */}
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            About Page
          </p>
        </div>
        <p className="md:text-xl text-xl text-gray-600">
          This is just a sample about page for react-router dom testing
        </p>
      </div>
    </div>
  );
};

export default About;
