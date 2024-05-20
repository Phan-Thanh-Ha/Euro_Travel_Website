"use client";
import { Breadcrum } from "@/components/home/bread-crumb";
import CustomerPage from "./customer/customer-page";
import Sidebar from "./sidebar";
import { HomeIcon } from "@radix-ui/react-icons";
import BackgroundLayout from "@/components/background-layout";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Dashboard() {
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
      <div className="container w-full">
        <div className="my-5 mx-4">
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
              { title: "Khách hàng", isCurrentPage: true, href: "/dashboard" },
            ]}
          />
        </div>
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12 md:col-span-4">
            <Sidebar />
          </div>
          <div className="hidden md:block md:col-span-8 h-fit">
            <CustomerPage />
          </div>
        </div>
      </div>
    </BackgroundLayout>
  );
}