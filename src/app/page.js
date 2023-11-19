"use client"

import Navbar from '@/components/Navbar/Navbar'
import Sidebar from '@/components/Sidebar/Sidebar'
import TodoList from '@/components/TodoList/TodoList';
import axios from 'axios';

import { useEffect, useState } from 'react';

const url = "https://6559f7296981238d054cfc28.mockapi.io/Todos";


export default function Home() {
  const [todos, setTodos] = useState([])


const getTodos = async ()=>{
  try {
    const {data}=await axios.get(url)
    setTodos(data)
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

const toogleTodo= async (item)=>{
  try {
    await axios.put(`${url}/${item._id}`, {
      ...item,
      is_completed: !item.is_completed
    })
    getTodos()
  } catch (error) {
    console.log(error);
    
  }
}

const deleteTodo= async (_id)=>{
  try {
    await axios.delete(`${url}/${_id}`);
    getTodos()
  } catch (error) {
    console.log(error);
  }
}




useEffect(() => {
   getTodos()
}, []) 


  return (
    <div>
      <Navbar />
      <div className='flex flex-wrap ' >
        <Sidebar />
        <TodoList todos={todos} toogleTodo={toogleTodo} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}
