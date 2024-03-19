'use client'

import { useState } from "react";
import Sidebar from "./ui/sidebar/sidebar";
import DiscussionForum from "./ui/discussionForum/discussionForum";
import MarketStories from "./ui/marketStories/marketStories";
import { IoIosArrowForward,IoIosArrowBack } from "react-icons/io";
export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <div className="relative z-0 flex flex-row h-full w-full overflow-hidden bg-slate-200">
      <div className={`flex-shrink-0 overflow-x-hidden ${isSidebarOpen ? '' : 'hidden'} w-64 transition-width duration-300 ease-in-out`}>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      <div className="h-screen w-3 flex justify-center items-center">
        {
          isSidebarOpen ? (
            <button onClick={toggleSidebar} className="h-20 bg-gray-900" >
            <IoIosArrowBack  className="text-xl text-white"/>
            </button>
            
          ):
          (
            <button onClick={toggleSidebar} className="h-20 bg-gray-900">
            <IoIosArrowForward className="text-xl text-white"/>
            </button>
          )
        
        }
          

      </div>
      <div className={`absolute md:relative flex h-full -z-[100]   flex-1 flex-col md:flex-row transition-width duration-300 ease-in-out ${isSidebarOpen ? 'w-[calc(100%-10%)]' : 'w-full'}`}>
        <DiscussionForum />
        <MarketStories />
      </div>
    </div>
  );
}
