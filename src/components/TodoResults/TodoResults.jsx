import React, { useState } from "react";
import UpdateModal from "../Modal/UpdateModal";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const TodoResults = ({ item, toogleTodo, deleteTodo }) => {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(item.is_completed);

  const handleUpdateClick = () => {
    setIsUpdateModalOpen(true);
  };

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
    toogleTodo(item);
  };

  return (
    <div className="bg-white cursor-pointer px-20 py-20 rounded-xl ">
      <div className="checkbox-container flex justify-around gap-2 " onClick={handleCheckboxClick}>
        {isChecked ? (
          <div className="checkbox checked border-2 border-blue-500 rounded-full w-2 h-4 py-6 px-6 bg-white-700 ">
            &#10003;
          </div>
        ) : (
          <div className="border-2 rounded-full w-2 h-4 p-4 bg-white-700"></div>
        )}
        {isChecked ? (
          <p className="line-through" onClick={handleCheckboxClick}>
            {item.title} <br />
            {item.description} <br />
            created_up: {item.created_up} <br />
            updated_up: {item.updated_up}
          </p>
        ) : (
          <p onClick={handleCheckboxClick}>
            {item.title} <br />
            {item.description} <br />
            created_up: {item.created_up} <br />
            updated_up: {item.updated_up}
          </p>
        )}
      </div>

      <div className="flex mt-3  mx-auto justify-around text-xl text-red-200  ">
        <button onClick={() => deleteTodo(item._id)}>
          <FaRegTrashAlt />
        </button>
        <button onClick={handleUpdateClick}>
          <FaEdit />
        </button>
      </div>

      <br />
      {isUpdateModalOpen && (
        <UpdateModal todo={item} onClose={() => setIsUpdateModalOpen(false)} />
      )}
    </div>
  );
};

export default TodoResults;
