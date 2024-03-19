
import React from "react";
import Link from 'next/link';
  const Sidebar = ({ isOpen, toggleSidebar }) => {



  return (
    <div
      className={`fixed inset-y-0 left-0 w-64 bg-gray-900 text-white flex flex-col ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transform transition-all duration-300 ease-in-out`}
    >
        <h2 className="text-2xl font-bold h-10 p-4">Hello, User</h2>
        <div className="h-[1px] w-[100%] bg-slate-200 mt-4 "></div>
      <div className="p-2 flex flex-col">
        <ul>
          <li className="p-2 cursor-pointer hover:bg-blue-500">
            <Link href="discussion-forum" className="hover:text-white">
              Discussion Forum
            </Link>
          </li>
          <li className="p-2 cursor-pointer hover:bg-blue-500">
            <Link href="/market-stories" className="hover:text-white">
              Market Stories
            </Link>
          </li>
          <li className="p-2 cursor-pointer hover:bg-blue-500">
            <Link href="#" className="hover:text-white">
              Sentiments
            </Link>
          </li>
          <li className="p-2 cursor-pointer hover:bg-blue-500">
            <Link href="#" className="hover:text-white">
              Market Sector
            </Link>
          </li>
          <li className="p-2 cursor-pointer hover:bg-blue-500">
            <Link href="#" className="hover:text-white">
              Watchlist
            </Link>
          </li>
          <li className="p-2 cursor-pointer hover:bg-blue-500">
            <Link href="#" className="hover:text-white">
              Events
            </Link>
          </li>
          <li className="p-2 cursor-pointer hover:bg-blue-500">
            <Link href="#" className="hover:text-white">
              News/Interview
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
