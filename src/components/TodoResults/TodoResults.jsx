import React from 'react'

const TodoResults = ({item,toogleTodo,deleteTodo}) => {
  console.log(item);
  return (
    <div className="bg-white cursor-pointer">
      {item.is_completed ? (
        <p className="line-through" onClick={() => toogleTodo(item)}>
          {item.title}
          {item.description}
        </p>
      ) : (
        <p onClick={() => toogleTodo(item)}>
          {item.title}
          {item.description}
        </p>
      )}
      <span onClick={()=>deleteTodo(item._id)} >x</span>
      <br />
    </div>
  );
}

export default TodoResults