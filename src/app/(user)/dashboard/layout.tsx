"use client";
import React, { useState } from "react";
import Sidebar from "./sidebar";
import SidebarMobile from "./sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode; }) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  const closeMobileSidebar = () => {
    setIsMobileSidebarOpen(false);
  };

  return (
    <section>
      <div className="flex h-screen overflow-hidden mx-6 relative">
        {/* Sidebar for desktop */}
        <div className="hidden lg:block mx-3">
          <Sidebar />
        </div>

        {/* Mobile sidebar toggle button */}
        <button
          className="md:hidden fixed top-1/2 left-0 transform -translate-y-1/2 z-50 rounded-full p-1 bg-transparent text-black"
          onClick={toggleMobileSidebar}
        >
          {isMobileSidebarOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>

          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          )}
        </button>

        {/* Mobile sidebar */}
        <div className={`md:hidden fixed inset-0 z-50 bg-gray-700 bg-opacity-75 transition-opacity duration-300 ${isMobileSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={closeMobileSidebar}>
          <div className="bg-white w-64 h-full shadow-md" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-2 right-4 z-50 rounded-full p-2" onClick={closeMobileSidebar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <SidebarMobile />
          </div>
        </div>

        {/* Main content */}
        <div className="w-full overflow-y-auto overflow-x-hidden">
          {children}
        </div>
      </div>
    </section >
  );
}
