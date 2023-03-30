import React from "react";

import { moonriverDetails } from "../../content/Moonriver";

export default function Moonriver() {
  return (
    <div className="pt-10 mx-auto">
      <h1 className="pt-24 text-2xl flex justify-center font-bold">
        {moonriverDetails.title}
      </h1>
      <div className="justify-center text-center px-16 lg:px-36 text-base sm:text-lg md:text-xl lg:text-xl pt-10">
        <p>{moonriverDetails.description1}</p>
        <p>{moonriverDetails.description2}</p>
      </div>
      <div className="md:flex justify-center md:gap-5 py-10 md:px-20 space-x-2 pt-24">
        <button
          type="button "
          className=" hover:bg-gray-100 hover:text-red-900 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow small"
        >
          UPCOMING{" "}
        </button>
        <button
          type="button "
          className=" hover:bg-gray-100 hover:text-red-900 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow small"
        >
          ONGOING{" "}
        </button>
        <button
          type="button "
          className=" hover:bg-gray-100 hover:text-red-900 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow small"
        >
          LAUNCHED
        </button>
      </div>
    </div>
  );
}
