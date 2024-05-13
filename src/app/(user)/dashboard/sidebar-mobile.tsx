"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Breadcrum } from "@/components/home/bread-crumb";
import Image from "next/image";
import { DecodeObject } from "@/utils/DecodeString";

const SidebarMobile = () => {
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
  };

  return (
    <aside className="bg-white w-64 h-full shadow-md rounded-r-lg">
      {/* SIDEBAR HEADER */}
      <div className="py-4 rounded-r-lg">
        <Breadcrum
          items={[
            { href: "/", title: "Home" },
            { title: "Thông tin khách hàng", isCurrentPage: true },
          ]}
        />
      </div>
      <div className=" my-8 bg-slate-100 rounded-md">
        {/* user */}
        <div className="w-full h-[150px]">
          <div className="rounded-lg h-[150px] overflow-hidden">
            <Image
              src="/images/bg5.jpg"
              alt='Mountain'
              width={100}
              height={100}
              className="object-cover object-top w-full"
            />
          </div>
          <div className="mx-auto w-[100px] h-[100px] relative -mt-16 border-2 border-white rounded-full overflow-hidden">
            <Image
              src={"/images/avt-default.svg"}
              width={40}
              height={40}
              alt="Nhat Linh"
              className="w-[100px] h-[100px] rounded-full object-cover fill-none shadow-sm border object-center bg-white"
            />
          </div>
          <div className="flex justify-center w-full items-center">
            <h1 className="text-center text-xl uppercase text-main font-bold">Nhat Linh</h1>
          </div>
        </div>
        {/* user */}
        {/* SIDEBAR HEADER */}
        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          {/* Sidebar Menu */}
          <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
            {/* Menu Group */}
            <div className="my-8">
              <ul className="mb-6 flex flex-col gap-1.5">
                {/* Menu Item Profile */}
                <li>
                  <Link
                    href="/dashboard/profile"
                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-black duration-300 ease-in-out 
                  ${pathname.includes("profile") && "bg-slate-300"}`}
                  >
                    Thông tin khách hàng
                  </Link>
                </li>
                {/* Menu Item Profile */}
                {/* Menu Item Profile */}
                <li>
                  <Link
                    href="/dashboard/customer"
                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-black duration-300 ease-in-out 
                  ${pathname.includes("customer") && "bg-slate-300"}`}
                  >
                    Thông tin khách hàng
                  </Link>
                </li>
                {/* Menu Item Profile */}
                {/* Menu Item contract */}
                <li>
                  <Link
                    href="/dashboard/contract"
                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-black duration-300 ease-in-out 
                  ${pathname.includes("contract") && "bg-slate-300"}`}
                  >
                    Hợp đồng của tôi
                  </Link>
                </li>
                {/* Menu Item contract */}
                {/* Menu Item account */}
                <li>
                  <Link
                    href="/dashboard/account"
                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-black duration-300 ease-in-out 
                  ${pathname.includes("account") && "bg-slate-300"}`}
                  >
                    Tài khoản mật khẩu
                  </Link>
                </li>
                {/* Menu Item account */}
                {/* Menu Item đăng xuất */}
                <li>
                  <button
                    onClick={handleSignOut}
                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-black duration-300 ease-in-out`}
                  >
                    Đăng xuất
                  </button>
                </li>
                {/* Menu Item đăng xuất */}
              </ul>
            </div>
          </nav>
          {/* Sidebar Menu */}
        </div>
      </div>
    </aside>
  );
};

export default SidebarMobile;
