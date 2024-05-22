import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import LoginByGoogle from "@/components/auth/LoginByGoogle";
import LoginByFacebook from "@/components/auth/LoginByFaceBook";
import CustomerLoginForm from "@/components/forms/login-form";
import { fetchSetting } from "@/actions/setting";
import envConfig from "../../../../config";
import { handleDataSetting } from "@/utils/handleDataSetting";

export default async function LoginPage() {
  const settings = await fetchSetting({
    KeySetting: "BgFooter",
  });
  const setting = await handleDataSetting(settings);
  return (
    <div className="relative overflow-hidden h-[100vh] p-4">
      <div className="absolute inset-0 z-0 opacity-70">
        <Image
          src={`${setting.BgFooter}`}
          alt="bg"
          width={1920}
          height={1080}
          quality={100}
          className="w-full h-auto object-cover fill-current"
        />
      </div>
      <div className="absolute inset-0 z-10 flex justify-center items-center rounded-md bg-transparent">
        <div className="flex w-[500px] flex-col justify-center px-6 py-4 md:py-12 lg:px-8 bg-white/90 md:bg-white rounded-md mx-4">
          <div className="flex justify-center items-center">
            <Link href={"/"} title="home" rel="go home">
              <Image width={150} height={150} src="/images/logo.png" alt="" />
            </Link>
          </div>
          <div className="mt-7">
            <CustomerLoginForm />
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
                Bạn chưa có tài khoản -{" "}
                <Link href={"/register"} className="text-two hover:text-two">
                  Đăng ký
                </Link>
              </p>
            </div>
            <div className="text-sm flex justify-center items-center">
              <Link href="/fpassword" className=" text-two hover:text-two">
                Quên mật khẩu ?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
