"use client";
import Image from "next/image";
import Link from "next/link";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import LoginByGoogle from "@/components/auth/LoginByGoogle";
import LoginByFacebook from "@/components/auth/LoginByFaceBook";
import CustomerLoginForm from "@/components/forms/login-form";
import { getUserLogin } from "@/utils/GetUserLogin";
import { fetchSetting } from "@/actions/setting";
import envConfig from "../../../../config";
interface IFrom {
  phone: string;
  password: string;
}

export default function LoginPage() {
  const [bgImage, setBgImage] = useState("");
  const getImage = async () => {
    const result = await fetchSetting({
      KeySetting: "BgFooter",
    });
    setBgImage(result[0]?.DataSetting?.split(",")[0] || "");
  }

  useEffect(() => {
    getImage();
    getUserLogin();
    window.localStorage.removeItem("userLogin");
    window.localStorage.removeItem("userLoginGg");
  }, [])
  return (
    <div className="relative overflow-hidden h-[100vh] p-4">
      <div className="absolute inset-0 z-0 opacity-70">
        <Image
          src={`${envConfig.NEXT_PUBLIC_CDN + bgImage}`}
          alt="bg"
          width={1000}
          height={1000}
          quality={100}
          className="w-full h-full object-cover fill-current"
        />
      </div>
      <div className="absolute inset-0 z-10 flex justify-center items-center rounded-md bg-transparent">
        <div className="flex w-[500px] flex-col justify-center px-6 py-4 md:py-12 lg:px-8 bg-white/90 md:bg-white rounded-md mx-4">
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
          <div className="mt-7">
            <CustomerLoginForm setOpen={function (open: boolean): void {
              throw new Error("Function not implemented.");
            }} setIsLogin={function (isLogin: boolean): void {
              throw new Error("Function not implemented.");
            }} />
            <div className="flex justify-center mt-0 md:mt-2 ">
              <p className="text-sm text-two leading-6 font-medium">
                ----- Hoặc ----
              </p>
            </div>
            <div className="w-full mt-4">
              <div className="">
                <LoginByGoogle />
                <LoginByFacebook />
              </div>
            </div>
            <div className="w-full flex justify-center items-center mt-3">
              <p className="text-sm text-black leading-6">
                Bạn chưa có tài khoản - {" "}
                <a
                  href={"/register"}
                  className="text-two hover:text-two"
                >
                  Đăng ký
                </a>
              </p>
            </div>
            <div className="text-sm flex justify-center items-center">
              <a href="/fpassword" className=" text-two hover:text-two">
                Quên mật khẩu ?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
