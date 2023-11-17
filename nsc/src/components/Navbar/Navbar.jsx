import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-5 py-6 bg-slate-100">
      <div className="flex flex-col md:flex-row justify-between items-center w-full md:w-1/3 mb-4 md:mb-0">
        <div className="mb-2 md:mb-0 md:mr-4 max-md:mb-3 ">
          <h1 className="text-2xl font-extralight tracking-wider mb-1">
            Tasks
          </h1>
          <div className="flex text-xs">
            <p className="pr-2">Home</p>
            <span className="pr-2">|</span>
            <p>Apps</p>
          </div>
        </div>
        <div className="flex bg-white justify-center items-center px-4 py-3 rounded-xl">
          <input
            className="outline-none placeholder:text-lg bg-white"
            type="text"
            placeholder="Search"
          />
          <CiSearch size={22} fill="gray" />
        </div>
      </div>
      <div className="flex cursor-pointer text-blue-400 bg-white w-full md:w-36 items-center justify-center md:justify-between px-5 py-2 rounded-xl border-2 border-blue-400">
        <FaPlus className="max-md:mr-2" />
        <button  >New Task</button>
      </div>
    </div>
  );
};

export default Navbar;
