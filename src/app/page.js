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



useEffect(() => {
   getTodos()
}, [])


  return (
   <div>
    <Navbar/>
    <Sidebar/>
    <TodoList todos={todos} />
   </div>
   
     )
}
