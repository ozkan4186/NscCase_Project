import React, { useState } from "react";
import { TiPrinter } from "react-icons/ti";
import { AiOutlineRise, AiOutlineFall } from "react-icons/ai";
import { CiShoppingTag } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";

const Sidebar = ({ todos, toogleTodo, deleteTodo }) => {
 

  const handleMenuClick = (menuName) => {
    switch (menuName) {
      case "All":
        listAllTodos();
        break;
      case "Active":
        listActiveTodos();
        break;
      case "Done":
        listDoneTodos();
        break;
      case "Trash":
       
        break;
      default:
        break;
    }
  };

  const listAllTodos = () => {
    console.log("Listing all todos:", todos);
  };

  const listActiveTodos = () => {
    const activeTodos = todos.filter((todo) => !todo.is_completed);
    console.log("Listing active todos:", activeTodos);
  };

  const listDoneTodos = () => {
    const doneTodos = todos.filter((todo) => todo.is_completed);
    console.log("Listing done todos:", doneTodos);
  };

  
  const sidebarMenus = [
    { name: "All", icon: <TiPrinter /> },
    { name: "Active", icon: <AiOutlineRise /> },
    { name: "Done", icon: <AiOutlineFall /> },
    { name: "Tags", icon: <CiShoppingTag /> },
    { name: "Trash", icon: <FaRegTrashAlt /> },
  ];

  return (
    <div className="bg-red-50 md:h-screen w-full lg:w-1/4">
      <div className="p-12">
        {sidebarMenus.map((item, index) => (
          <div
            key={index}
            className="block py-2 px-4 text-black cursor-pointer"
            onClick={() => handleMenuClick(item.name)}
          >
            <div className="flex items-center w-20 lg:m-3 m-auto">
              <span className="mr-4 hover:text-blue-400">{item.icon}</span>
              <span className="hover:text-blue-400">{item.name}</span>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Sidebar;
