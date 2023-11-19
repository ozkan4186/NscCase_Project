import React from 'react'
import { CiSearch } from "react-icons/ci";
const InputForm = () => {
  return (
    <div className="flex bg-white justify-center items-center px-4 py-3 rounded-xl">
      <input
        className="outline-none placeholder:text-lg bg-white"
        type="text"
        placeholder="Search"
      />
      <CiSearch size={22} fill="gray" />
    </div>
  );
}

export default InputForm