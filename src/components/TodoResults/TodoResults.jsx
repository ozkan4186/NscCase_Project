import React from 'react'

const TodoResults = ({item}) => {
  console.log(item);
  return (
    <div className="  bg-white cursor-pointer  ">
      {item.is_completed ? (
        <p className="line-through">
          {item.title}
          {item.description}
        </p>
      ) : (
        <p>
          {item.title}
          {item.description}
        </p>
      )}
      <span>x</span>
      <br />
    </div>
  );
}

export default TodoResults