"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Breadcrum } from "@/components/home/bread-crumb";
import { DecodeObject } from "@/utils/DecodeString";

const Sidebar = () => {
  const pathname = usePathname();
  const { push } = useRouter();
  const [user, setUser] = useState<any>({});
  useEffect(() => {
    getUserLogin();
  }, []);
  const getUserLogin = () => {
    try {
      const storage = window.localStorage.getItem("userLogin");
      const data = DecodeObject(storage || "");
      setUser(data || {});
      console.log(data);
    } catch (error) { }
  };

  const handleSignOut = () => {
    window.localStorage.removeItem("userLogin");
    push("/login");
  }
  return (
    <aside
      className={`sm:hidden lg:block absolute left-0 top-0 z-9999 flex h-screen sm:w-full md:w-[350px] flex-col overflow-y-hidden bg-white duration-300 ease-linear lg:static lg:translate-x-0 translate-x-0 rounded-b-lg`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="py-4">
        <Breadcrum
          items={[
            { href: "/", title: "Home" },
            { title: "Thông tin khách hàng", isCurrentPage: true },
          ]}
        />
      </div>
      <div className=" my-2 bg-slate-100 rounded-md">
        {/* usre */}
        <div className="w-full h-[150px]">
          <div className="rounded-lg h-[150px] overflow-hidden">
            <Image
              className="object-cover object-top w-full"
              src="/images/bg5.jpg"
              alt='Mountain'
              width={400}
              height={150}
              quality={100}
            />
          </div>
          <div className="mx-auto w-[100px] h-[100px] relative -mt-16 border-2 border-white rounded-full overflow-hidden">
            <Image
              src={"/images/avt-default.svg"}
              width={40}
              height={40}
              quality={100}
              alt=" Nhat Linh"
              className="w-[100px] h-[100px] rounded-full object-cover fill-none shadow-sm border object-center bg-white"
            />
          </div>
          <div className="flex justify-center w-full items-center">
            <h1 className="text-center text-xl uppercase text-main font-bold">{user.CustomerName}</h1>
          </div>
        </div>
        {/* user  */}
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear h-[100vh] mb-10 pb-10 rounded-b-lg">
          {/* <!-- Sidebar Menu --> */}
          <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
            {/* <!-- Menu Group --> */}
            <div className="my-8">
              <ul className="mb-6 flex flex-col gap-1.5">
                {/* <!-- Menu Item Profile --> */}
                <li>
                  <Link
                    href="/dashboard/profile"
                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-black duration-300 ease-in-out 
                  ${pathname.includes("profile") && "bg-slate-300"}`}
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
                  </Link>
                </li>
                {/* <!-- Menu Item Profile --> */}
                {/* <!-- Menu Item Profile --> */}
                <li>
                  <Link
                    href="/dashboard/customer"
                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-black duration-300 ease-in-out 
                  ${pathname.includes("customer") && "bg-slate-300"}`}
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
                  </Link>
                </li>
                {/* <!-- Menu Item Profile --> */}
                {/* <!-- Menu Item contract --> */}
                <li>
                  <Link
                    href="/dashboard/contract"
                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-black duration-300 ease-in-out 
                  ${pathname.includes("contract") && "bg-slate-300"}`}
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
                    Hợp đồng của tôi
                  </Link>
                </li>
                {/* <!-- Menu Item contract --> */}
                {/* <!-- Menu Item account --> */}
                <li>
                  <Link
                    href="/dashboard/account"
                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-black duration-300 ease-in-out 
                  ${pathname.includes("account") && "bg-slate-300"}`}
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
                      className="lucide lucide-circle-user"
                    >
                      <circle cx={12} cy={12} r={10} />
                      <circle cx={12} cy={10} r={3} />
                      <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
                    </svg>

                    Tài khoản mật khẩu
                  </Link>
                </li>
                {/* <!-- Menu Item account --> */}
                {/* <!-- Menu Item đăng xuất --> */}
                <li>
                  <button
                    onClick={handleSignOut}
                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-black duration-300 ease-in-out`}
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
                </li>
                {/* <!-- Menu Item đăng xuất --> */}
              </ul>
            </div>
          </nav>
          {/* <!-- Sidebar Menu --> */}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;