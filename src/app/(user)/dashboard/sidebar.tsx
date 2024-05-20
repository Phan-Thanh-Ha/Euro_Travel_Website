"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Breadcrum } from "@/components/home/bread-crumb";
import { getUserLogin } from "@/utils/GetUserLogin";

const Sidebar = () => {
  const pathname = usePathname();
  const { push } = useRouter();
  const [user, setUser] = useState<any>({});
  useEffect(() => {
    setUser(getUserLogin());
  }, []);

  const handleSignOut = () => {
    window.localStorage.removeItem("userLogin");
    push("/login");
  }
  return (
    <div
      className="w-full px-3 mx-1"
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="rounded-lg">
        {/* usre */}
        <div className="w-full h-[180px] ">
          <div className="flex justify-center items-center">
            <div className="bg-main text-white w-full py-6 rounded-lg">
              <div className="mx-auto w-20 max-h-20 relative rounded-full overflow-hidden bg-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth={1}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-user-round w-full h-full p-4"
                >
                  <circle cx={12} cy={8} r={5} />
                  <path d="M20 21a8 8 0 0 0-16 0" />
                </svg>
              </div>
              <h1 className="text-center text-xl uppercase text-white my-3">{user?.CustomerName || "Khách hàng"}</h1>
            </div>
          </div>
        </div>
        {/* user  */}
        {/* <!-- SIDEBAR HEADER --> */}
        <div className=" no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear  rounded-b-lg">
          {/* <!-- Sidebar Menu --> */}
          <nav className="mt-1 py-4 lg:mt-1 ">
            {/* <!-- Menu Group --> */}
            <div className="">
              <ul className="mb-6 flex flex-col gap-1.5">
                {/* <!-- Menu Item Profile --> */}
                <Link
                  href="/dashboard/customer"
                >
                  <li className={`flex justify-between items-center px-2 bg-gray-100 hover:bg-gray-200 rounded-md duration-300 ease-in-out ${pathname.includes("customer") && "bg-red-100 text-main"}`}>
                    <span
                      className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-4 font-medium text-balck  
                  `}
                    >
                      <svg
                        className="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.0002 7.79065C11.0814 7.79065 12.7689 6.1594 12.7689 4.1344C12.7689 2.1094 11.0814 0.478149 9.0002 0.478149C6.91895 0.478149 5.23145 2.1094 5.23145 4.1344C5.23145 6.1594 6.91895 7.79065 9.0002 7.79065ZM9.0002 1.7719C10.3783 1.7719 11.5033 2.84065 11.5033 4.16252C11.5033 5.4844 10.3783 6.55315 9.0002 6.55315C7.62207 6.55315 6.49707 5.4844 6.49707 4.16252C6.49707 2.84065 7.62207 1.7719 9.0002 1.7719Z"
                          fill=""
                        />
                        <path
                          d="M10.8283 9.05627H7.17207C4.16269 9.05627 1.71582 11.5313 1.71582 14.5406V16.875C1.71582 17.2125 1.99707 17.5219 2.3627 17.5219C2.72832 17.5219 3.00957 17.2407 3.00957 16.875V14.5406C3.00957 12.2344 4.89394 10.3219 7.22832 10.3219H10.8564C13.1627 10.3219 15.0752 12.2063 15.0752 14.5406V16.875C15.0752 17.2125 15.3564 17.5219 15.7221 17.5219C16.0877 17.5219 16.3689 17.2407 16.3689 16.875V14.5406C16.2846 11.5313 13.8377 9.05627 10.8283 9.05627Z"
                          fill=""
                        />
                      </svg>
                      Thông tin khách hàng
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
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
                  </li>
                </Link>

                {/* <!-- Menu Item Profile --> */}
                {/* <!-- Menu Item contract --> */}
                <Link
                  href="/dashboard/contract"
                >
                  <li className={`flex justify-between items-center px-2 bg-gray-100 hover:bg-gray-200 rounded-md duration-300 ease-in-out ${pathname.includes("contract") && "bg-red-100 text-main"}`}>
                    <span
                      className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-4 font-medium text-balck  
                  `}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-receipt-text"
                      >
                        <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
                        <path d="M14 8H8" />
                        <path d="M16 12H8" />
                        <path d="M13 16H8" />
                      </svg>
                      Hợp đồng
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
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
                  </li>
                </Link>
                {/* <!-- Menu Item contract --> */}
                {/* <!-- Menu Item account --> */}
                <Link
                  href="/dashboard/mytour"
                >
                  <li className={`flex justify-between items-center px-2 bg-gray-100 hover:bg-gray-200 rounded-md duration-300 ease-in-out ${pathname.includes("mytour") && "bg-red-100 text-main"}`}>
                    <span
                      className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-4 font-medium text-balck  
                  `}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-luggage"
                      >
                        <path d="M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0" />
                        <path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14" />
                        <path d="M10 20h4" />
                        <circle cx={16} cy={20} r={2} />
                        <circle cx={8} cy={20} r={2} />
                      </svg>

                      Tour đã đặt
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
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
                  </li>
                </Link>
                {/* <!-- Menu Item account --> */}
                {/* <!-- Menu Item đăng xuất --> */}
                <li className="flex justify-between items-center px-2 bg-gray-100 hover:bg-gray-200 rounded-md duration-300 ease-in-out">
                  <button
                    onClick={handleSignOut}
                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-4 font-medium text-balck  w-full`}
                  >
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
                      className="lucide lucide-log-out"
                    >
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                      <polyline points="16 17 21 12 16 7" />
                      <line x1={21} x2={9} y1={12} y2={12} />
                    </svg>
                    Đăng xuất
                  </button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
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
                </li>
                {/* <!-- Menu Item đăng xuất --> */}
              </ul>
            </div>
          </nav>
          {/* <!-- Sidebar Menu --> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;