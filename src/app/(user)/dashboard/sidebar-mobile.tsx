"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Breadcrum } from "@/components/home/bread-crumb";
import Image from "next/image";
import { DecodeObject } from "@/utils/DecodeString";
import { getUserLogin } from "@/utils/GetUserLogin";

const SidebarMobile = () => {
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
                <Link
                  href="/dashboard/customer"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-black duration-300 ease-in-out 
                  ${pathname.includes("customer") && "bg-slate-300"}`}
                >
                  <li>
                    Thông tin khách hàng
                  </li>
                </Link>
                {/* Menu Item Profile */}
                {/* Menu Item contract */}

                <Link
                  href="/dashboard/contract"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-black duration-300 ease-in-out 
                  ${pathname.includes("contract") && "bg-slate-300"}`}
                >
                  <li>
                    Hợp đồng của tôi
                  </li>
                </Link>

                {/* Menu Item contract */}
                {/* Menu Item account */}

                <Link
                  href="/dashboard/account"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-black duration-300 ease-in-out 
                  ${pathname.includes("account") && "bg-slate-300"}`}
                >
                  <li>
                    Tài khoản mật khẩu
                  </li>
                </Link>

                {/* Menu Item account */}
                {/* Menu Item đăng xuất */}

                <button
                  onClick={handleSignOut}
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-black duration-300 ease-in-out`}
                >
                  <li>
                    Đăng xuất
                  </li>
                </button>

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
