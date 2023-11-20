import React from 'react'
import { useState } from 'react';
import UpdateModal from '../Modal/UpdateModal';

const TodoResults = ({item,toogleTodo,deleteTodo}) => {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const handleUpdateClick = () => {
    setIsUpdateModalOpen(true);
  };
  return (
    <div className="bg-white cursor-pointer px-20 py-20 rounded-xl ">
      {item.is_completed ? (
        <p className="line-through" onClick={() => toogleTodo(item)}>
          {item.title} <br />
          {item.description}
        </p>
      ) : (
        <p onClick={() => toogleTodo(item)}>
          {item.title} <br />
          {item.description}
        </p>
      )}
      <span onClick={() => deleteTodo(item._id)}>x</span>
      <button onClick={handleUpdateClick}>Update</button>
      <br />
      {isUpdateModalOpen && (
        <UpdateModal
          todo={item}
          onClose={() => setIsUpdateModalOpen(false)}
        
        />
      )}
    </div>
  );
}

export default TodoResults