"use client";
import { fetchSetting } from "@/actions/setting";
import CustomerRegisterForm from "@/components/forms/register-form";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import envConfig from "../../../../config";

function Register() {
  const [bgImage, setBgImage] = useState("");
  const getImage = async () => {
    const result = await fetchSetting({
      KeySetting: "BgFooter",
    });
    setBgImage(result[0]?.DataSetting?.split(",")[0] || "");
  }

  useEffect(() => {
    getImage();
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
      <div className="absolute inset-0 z-10 flex justify-center items-center rounded-md py-4">
        <div className="flex w-[600px] flex-col justify-center px-6 py-6 lg:px-4 bg-white/90 md:bg-white rounded-md mx-4">
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
