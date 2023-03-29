import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Navbar = ({
  connection,
  disconnect,
  getTokens,
  logout,
  readContract,
  wallet,
}) => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-black font-lora flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white sticky z-20">
      <h1 className=" w-full text-3xl font-bold font-lora">MOONPAD</h1>
      <ul className="hidden lg:flex ">
        <li className="p-4">
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            HOME
          </button>
        </li>
        <li className="p-4  ">
          <button
            onClick={() => {
              navigate("/mint");
            }}
          >
            MINT
          </button>
        </li>
        <li className="p-4 ">ROADMAP</li>
        <li className="p-4 ">TEAM</li>
        <li className="p-4">LAUNCHPAD</li>
        <li className="p-4">FAQ</li>
      </ul>

      <div onClick={handleNav} className="block lg:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#161631] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold m-4">MOONPAD</h1>
        <li className="p-4 border-b border-gray-600">
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            HOME
          </button>
        </li>
        <li className="p-4 border-b border-gray-600">
          <button
            onClick={() => {
              navigate("/mint");
            }}
          >
            MINT
          </button>
        </li>
        <li className="p-4 border-b border-gray-600">ROADMAP</li>
        <li className="p-4 border-b border-gray-600">TEAM</li>
        <li className="p-4 border-b border-gray-600">LAUNCHPAD</li>
        <li className="p-4">FAQ</li>
      </ul>

      <button
        type="button "
        className={`hover:bg-gray-100 hover:text-red-900 text-white font-semibold md:px-10 border border-gray-400 rounded shadow small ml-10 sm:w-[35%] py-3 ${
          logout ? "hover:before:content-['Disconnect:']" : ""
        }`}
        onClick={() => {
          logout
            ? (async function () {
                await disconnect();
              })()
            : (async function () {
                await connection();
                await readContract();
                await getTokens();
                navigate("/mint");
              })();
        }}
      >
        {wallet}
      </button>
    </div>
  );
};

export default Navbar;
