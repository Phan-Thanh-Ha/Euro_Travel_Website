"use client";
import CustomerRegisterForm from "@/components/forms/register-form";
import Image from "next/image";
import Link from "next/link";

function Register() {
  return (
    <div className="relative overflow-hidden bg-white md:bg-current h-screen w-full py-2">
      <div className="absolute inset-0 z-0 opacity-70">
        <Image
          src="/images/bg3.jpg"
          alt="bg"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="w-full h-full hidden md:block"
        />
      </div>
      <div className="absolute inset-0 z-10 flex justify-center items-center rounded-md py-4">
        <div className="flex w-[600px] flex-col justify-center px-6 py-6 lg:px-4 bg-white rounded-md">
          <div className="flex justify-center items-center">
            <a href={"/"} title="home" rel="go home">
              <Image
                width={150}
                height={150}
                src="/images/logo.png"
                alt=""
              />
            </a>
          </div>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <CustomerRegisterForm setOpen={function (open: boolean): void {
              throw new Error("Function not implemented.");
            }} setIsLogin={function (isLogin: boolean): void {
              throw new Error("Function not implemented.");
            }} />
          </div>
          <div className="w-full mt-2 flex justify-center items-center">
            <p className="text-sm text-black leading-6">Bạn đã có tài khoản ? <a href={"/login"} className="text-two hover:text-two" >Đăng nhập</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Register;
