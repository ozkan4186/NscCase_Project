"use client"

import React, { useState } from "react";

import { FaPlus } from "react-icons/fa6";
import InputForm from "../InputForm/InputForm";
import Modal from "../Modal/Modal";

const Navbar = () => {
  const [isModalopen, setIsModalopen] = useState(false);
  const openModal = () => {
    setIsModalopen(true);
  };
  const closeModal = () => {
    setIsModalopen(false);
  };
  return (
    <div className="flex    flex-col md:flex-row justify-between items-center px-5 py-6 bg-slate-100 w-full ">
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
        <InputForm />
      </div>
      <div className="flex cursor-pointer text-blue-400 bg-white w-full md:w-36 items-center justify-center md:justify-between px-5 py-2 rounded-xl border-2 border-blue-400">
        <FaPlus className="max-md:mr-2" />
        <button onClick={openModal}>New Task</button>
      </div>
      {isModalopen && <Modal onClose={closeModal}/> }
    </div>
  );
};

export default Navbar;
