import React, { useState } from "react";
import UpdateModal from "../Modal/UpdateModal";

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
      <div className="checkbox-container" onClick={handleCheckboxClick}>
        {isChecked ? (
          <div className="checkbox checked border-2 border-blue-500 rounded-full w-2 h-4 py-6 px-6 bg-white-700 ">
            &#10003;
          </div>
        ) : (
          <div className="border-2 rounded-full w-2 h-4 p-4 bg-white-700"></div>
        )}
      </div>
      {isChecked ? (
        <p className="line-through" onClick={handleCheckboxClick}>
          {item.title} <br />
          {item.description}
        </p>
      ) : (
        <p onClick={handleCheckboxClick}>
          {item.title} <br />
          {item.description}
        </p>
      )}
      <span onClick={() => deleteTodo(item._id)}>x</span>
      <button onClick={handleUpdateClick}>Update</button>
      <br />
      {isUpdateModalOpen && (
        <UpdateModal todo={item} onClose={() => setIsUpdateModalOpen(false)} />
      )}
    </div>
  );
};

export default TodoResults;
