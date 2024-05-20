"use client";
import BackgroundLayout from "@/components/background-layout";
import Sidebar from "../sidebar";
import CustomerPage from "./customer-page";
import { Breadcrum } from "@/components/home/bread-crumb";
import { HomeIcon } from "@radix-ui/react-icons";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Customer() {
  const path = usePathname();
  const { push } = useRouter();
  useEffect(() => {
    let user = localStorage.getItem("userLogin");
    if (!user) {
      return push('/login')
    }
  }, [path])
  return (
    <BackgroundLayout>
      <div className="container w-full min-h-[65vh]">
        <div className="mx-4 my-5">
          <Breadcrum
            items={[
              {
                href: "/",
                title: (
                  <>
                    <HomeIcon />
                  </>
                ),
              },
              { title: "Khách hàng", href: "/dashboard" },
              { title: `Thông tin khách hàng`, isCurrentPage: true },
            ]}
          />
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="hidden md:block md:col-span-4">
            <Sidebar />
          </div>
          <div className="col-span-12 md:col-span-8 h-fit">
            <CustomerPage />
          </div>
        </div>
      </div>
    </BackgroundLayout>
  );
}