"use client";
import Image from "next/image";
import Link from "next/link";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { loginCustomer } from "@/actions/user";
import { EncodeObject } from "@/utils/DecodeString";
import { signIn, signOut } from "next-auth/react";
interface IFrom {
  phone: string;
  password: string;
}

const valid: Resolver<IFrom> = async (values) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;

  const errors: any = {};
  if (!values.phone) {
    errors.phone = {
      type: "required",
      message: "Nhập email hoặc số điện thoại.",
    };
  }
  if (!values.password) {
    errors.password = {
      type: "required",
      message: "Nhập mật khẩu.",
    };
  }
  if (!emailRegex.test(values.phone) && !phoneRegex.test(values.phone)) {
    errors.phone = {
      type: "validatePhoneOrEmail",
      message: "Số điện thoại hoặc email không đúng.",
    };
  }
  return {
    values: Object.keys(errors).length === 0 ? values : {},
    errors,
  };
};
export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorApi, setErrorApi] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFrom>({ resolver: valid });

  const handleLogin: SubmitHandler<IFrom> = async (data) => {
    if (data) {
      const params = {
        Email: data.phone,
        Password: data.password,
      };
      const response = await loginCustomer(params);
      if (response[0]?.State === 0) {
        setErrorApi("");
        window.localStorage.setItem("userLogin", EncodeObject(response[0]));
        window.location.href = "/dashboard";
      }
      if (response.Status === "NOTOK") {
        setErrorApi(response.ReturnMess);
      }
      console.log(response);
    }
    /* login succes */
    /* push('/'); */
  };
  // ...

  // ...
  return (
    <div className="relative overflow-hidden bg-gray-900 h-[100vh]">
      <div className="absolute inset-0 z-0 opacity-70">
        <Image
          src="/images/bg3.jpg"
          alt="bg"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="w-full h-full"
        />
      </div>
      <div className="absolute inset-0 z-10 flex justify-center items-center rounded-md ">
        <div className="flex w-[600px] flex-col justify-center px-6 py-12 lg:px-8 bg-white rounded-md">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-blue-900 uppercase">
              Đăng nhập
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              className="space-y-2"
              action="#"
              onSubmit={handleSubmit(handleLogin)}
            >
              <div>
                <label
                  htmlFor="phone"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Email hoặc số điện thoại
                </label>
                <div className="mt-2">
                  <input
                    {...register("phone")}
                    id="phone"
                    name="phone"
                    className="indent-2 focus:outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                  />
                  <div className="h-[17px] overflow-hidden">
                    {errors?.phone && (
                      <p className="text-yellow-600 text-sm">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Mật khẩu
                </label>
                <div className="">
                  <div className="relative">
                    <input
                      {...register("password")}
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      className="indent-2 focus:outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-4 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
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
                          className="lucide lucide-eye"
                        >
                          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                          <circle cx={12} cy={12} r={3} />
                        </svg>
                      ) : (
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
                          className="lucide lucide-eye-off"
                        >
                          <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                          <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                          <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                          <line x1={2} x2={22} y1={2} y2={22} />
                        </svg>
                      )}
                    </button>
                  </div>
                  <div className="h-[17px] overflow-hidden">
                    {errors?.password && (
                      <p className="text-yellow-600 text-sm">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <input
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 mt-10 text-xl hover:cursor-pointer  leading-8 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  value="Đăng nhập"
                />
              </div>
              <div className="h-[40px] overflow-hidden">
                {errorApi && (
                  <p className="text-yellow-600 text-sm text-center">
                    {errorApi}
                  </p>
                )}
              </div>
            </form>
            <div className="flex justify-center">
              <p className="text-sm text-gray-500 mt-4 leading-6 font-medium">
                ----- Hoặc ---
              </p>
            </div>
            <div className="w-full mt-4">
              <div className="">
                <div className="rounded-full">
                  <button
                    className=" pl-16 hover:bg-slate-50 w-full border py-2 gap-4 rounded-md"
                    onClick={() =>
                      signIn("google", { callbackUrl: "/dashboard" })
                    }
                  >
                    <div className="flex items-center gap-10">
                      <Image
                        width={35}
                        height={35}
                        src="/images/google-icon.png"
                        alt="Google"
                        className="rounded-full"
                        quality={100}
                      />
                      <p>Đăng nhập với Google</p>
                    </div>
                  </button>
                </div>
                <div className="roundedfull mt-1">
                  <button
                    className="pl-16 hover:bg-slate-50 w-full border py-2 gap-4 rounded-md"
                    onClick={() =>
                      signIn("facebook", { callbackUrl: "/dashboard" })
                    }
                  >
                    <div className="flex items-center gap-10">
                      <Image
                        width={35}
                        height={35}
                        src="/images/facebook-icon.png"
                        alt="Facebook"
                        className="rounded-full"
                        quality={100}
                      />
                      <p>Đăng nhập với Facebook</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full mt-10 flex justify-center items-center">
              <p className="text-md text-gray-500 leading-6">
                Bạn chưa có tài khoản -{" "}
                <Link
                  href={"/register"}
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  Đăng ký
                </Link>
              </p>
            </div>
            <div className="text-md flex justify-center items-center">
              <Link href="#" className=" text-indigo-600 hover:text-indigo-500">
                Quên mật khẩu ?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
