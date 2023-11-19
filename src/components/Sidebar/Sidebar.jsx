"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TiPrinter } from "react-icons/ti";
import { AiOutlineRise, AiOutlineFall } from "react-icons/ai";
import { CiShoppingTag } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";

const Sidebar = () => {
  const pathname = usePathname();
  console.log(pathname);

  const sidebarMenus = [
    {
      name: "All",
      icon: <TiPrinter />,
      link: "/",
    },
    {
      name: "Active",
      icon: <AiOutlineRise />,
      link: "/active",
    },
    {
      name: "Done",
      icon: <AiOutlineFall />,
      link: "/done",
    },
    {
      name: "Tags",
      icon: <CiShoppingTag />,
      link: "/tags",
    },
    {
      name: "Trash",
      icon: <FaRegTrashAlt />,
      link: "/trash",
    },
  ];

  return (
    <div className="  bg-red-50 md:h-screen   w-full lg:w-1/4">
      <div className="p-12 ">
        {sidebarMenus.map((item, index) => (
          <Link href={item.link} key={index}>
            <div
              className={`block py-2 px-4 text-black ${
                pathname === item.link ? "bg-white-700" : ""
              }`}
            >
              <div className="flex  items-center w-20 lg:m-3 m-auto ">
                <span className="mr-4  hover:text-blue-400  ">{item.icon}</span>
                <span className=" hover:text-blue-400 ">{item.name}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
