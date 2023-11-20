import React from 'react'
import TodoResults from '../TodoResults/TodoResults';

const TodoList = ({todos,toogleTodo,deleteTodo}) => {
    console.log(todos);
  return (
    <div className="flex  md:mx-auto h-20  px-24 py-3 w-3/4 gap-12 flex-wrap  ">
      {todos.map((item) => {
        return (
          <div className="flex gap-2   ">
            <TodoResults key={item.id} item={item} toogleTodo={toogleTodo} deleteTodo={deleteTodo} />
          </div>
        );
      })}
    </div>
  );
}

export default TodoList