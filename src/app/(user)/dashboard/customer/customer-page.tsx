"use client";
import { DecodeObject, EncodeObject } from "@/utils/DecodeString";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { Input } from "@/components/ui/input";
import FormCustomerUpdateInfo from "@/components/forms/customer-update-form";

const CustomerPage = () => {

  const { data: session } = useSession(); // data thông tin user đăng nhập bằng google
  const [user, setUser] = useState<any>({});
  const [loginType, setLoginType] = useState(0);

  useEffect(() => {
    if (session?.user) {
      const fm = {
        CustomerName: session?.user?.name,
        Email: session?.user?.email,
      }
      window.localStorage.setItem("userLoginGg", EncodeObject(fm));
    }
    getUserLogin();
  }, [session])
  const getUserLogin = () => {
    try {
      const userEmp = DecodeObject(window.localStorage.getItem("userLogin") || "");
      const userGg = DecodeObject(window.localStorage.getItem("userLoginGg") || "");
      if (userEmp) {
        setUser(userEmp);
        setLoginType(2);
      }
      if (userGg) {
        setUser(userGg)
        setLoginType(1);
      }
      if (!userEmp && !userGg) {
        setUser({})
        setLoginType(0);
      }
    } catch (error) { }
  };

  return (
    <div className="container w-full h-full flex justify-center rounded-xl border-[1px] min-h-[55vh]">
      <div className="container bg-white rounded-md py-6 md:pt-14">
        <div className="mx-auto w-24 h-24 relative border-4 border-white rounded-full overflow-hidden bg-gray-300">
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
        {/* <hr className="my-6" /> */}
        <div className="w-full flex justify-center">
          <div className="w-[500px]">
            <FormCustomerUpdateInfo className="px-4" setOpen={function (open: boolean): void {
              throw new Error("Function not implemented.");
            }} setIsLogin={function (isLogin: boolean): void {
              throw new Error("Function not implemented.");
            }} initialData={{
              name: user?.CustomerName || "",
              phone: user?.Phone || "",
              email: user?.Email || "",
              date: user?.Birth || new Date(),
              gender: user?.Gender && user?.Gender === 1 ? "Nữ" : "Nam"
            }} typeLogin={loginType} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerPage;