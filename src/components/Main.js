import React from "react";

import { useState } from "react";

const Main = () => {
  const [error] = useState("");
  const [token, setToken] = useState("");

  const handleChange = (event) => {
    setToken(event.target.value);
  };


  return (
    <div className="text-black">
      <div className="max-w-[800p] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#1e40af] font-bold p-2">REDIRECTION TEST</p>
        {/* <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data.
        </h1> */}
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            React and Axios Library Test
          </p>
        </div>
        <p className="md:text-xl text-xl text-gray-600">
          Input token and submit to ePay
        </p>
        <form method="post" action="https://esepaydemo3-neit5c7efq-an.a.run.app/select">
          <div>
            <input type="hidden" value={token} name="token" id="token" />
          </div>
          <div>
            <input
              type="text"
              id="large-input"
              onChange={handleChange}
              value={token}
              className="w-[550px] p-4 mt-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <button type="submit" className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Proceed to ePay</button>
          </div>
        </form>
        <p className="text-rose-700">{error}</p>
      </div>
    </div>
  );
};

export default Main;
