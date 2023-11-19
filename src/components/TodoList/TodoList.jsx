import React from 'react'
import TodoResults from '../TodoResults/TodoResults';

const TodoList = ({todos}) => {
    console.log(todos);
  return (
    <div>
        {todos.map((item)=>{
            return (
              <div className='flex justify-center gap-5 ' >
                <TodoResults key={item.id} item={item} />
              </div>
            );
        
    
        })}
    </div>
  )
}

export default TodoList