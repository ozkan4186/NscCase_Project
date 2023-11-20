"use client"
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import TodoList from "@/components/TodoList/TodoList";
import useSWR, { mutate } from "swr";
import axios from "axios";

const url = "https://6559f7296981238d054cfc28.mockapi.io/Todos";

const fetcher = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

export default function Home() {
  const { data: todos, error } = useSWR(url, fetcher);
   if (error) {
    return <div>Hata oluştu</div>;
  }

  if (!todos) {
    return <div>Veriler yükleniyor...</div>;
  }

  const toogleTodo = async (item) => {
    try {
      await axios.put(`${url}/${item._id}`, {
        ...item,
        is_completed: !item.is_completed,
      });
      // SWR'daki mutate fonksiyonu ile veriyi güncelle
      mutate(url);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (_id) => {
    try {
      await axios.delete(`${url}/${_id}`);
      // SWR'daki mutate fonksiyonu ile veriyi güncelle
      mutate(url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap ">
        <Sidebar
          todos={todos}
          toogleTodo={toogleTodo}
          deleteTodo={deleteTodo}
        />
        <TodoList
          todos={todos}
          toogleTodo={toogleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}































































