import React from 'react'
import TodoResults from '../TodoResults/TodoResults';

const TodoList = ({todos,toogleTodo,deleteTodo}) => {
    console.log(todos);
  return (
    <div className="flex  md:mx-auto h-20  w-2/4  flex-wrap  ">
      {todos.map((item) => {
        return (
          <div className="flex  p-7  ">
            <TodoResults key={item.id} item={item} toogleTodo={toogleTodo} deleteTodo={deleteTodo} />
          </div>
        );
      })}
    </div>
  );
}

export default TodoList