"use client";
import { RegisterCustomerData, registerCustomer } from "@/actions/user";
import { AlertDialogHeader } from "@/components/ui/alert-dialog";
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogTrigger } from "@radix-ui/react-alert-dialog";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";

interface IFrom {
  customer: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const valid: Resolver<IFrom> = async (values) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,15}$/;
  const errors: any = {};

  if(!passwordRegex.test(values.password)) {
    errors.password = {
      type: "validatePassword",
      message: "Mật khẩu từ 6 - 15 ký tự gồm chữ cái và số" 
    }
  }

  if (values.email !== "" && !emailRegex.test(values.email)) {
    errors.email = {
      type: "invalid",
      message: "Email không đúng định dạng.",
    };
  }

  if (!phoneRegex.test(values.phone)) {
    errors.phone = {
      type: "validatePhone",
      message: "Số điện thoại không đúng định dạng.",
    };
  }
  if (!values.phone) {
    errors.phone = {
      type: "required",
      message: "Nhập số điện thoại.",
    };
  }

  if (!values.customer) {
    errors.customer = {
      type: "required",
      message: "Nhập tên khách hàng.",
    };
  }

  if (!values.password) {
    errors.password = {
      type: "required",
      message: "Nhập mật khẩu.",
    };
  }
  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = {
      type: "required",
      message: "Mật khẩu xác nhận không đúng.",
    };
  }

  return {
    values: Object.keys(errors).length === 0 ? values : {},
    errors,
  };
};
function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [stateRegister, setStateRegister] = useState(false);
  const [errorApi, setErrorApi] = useState("");
  const { push } = useRouter();

  useEffect(() => {
    if (stateRegister) {
      const timeout = setTimeout(() => {
        push("/login");
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [stateRegister]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFrom>({ resolver: valid });

  const handleRegister: SubmitHandler<IFrom> = async (data) => {
    if (data) {
      setErrorApi("");
      try {
        const params = {
          CustomerName: data.customer,
          CustomerPhone: data.phone,
          CustomerEmail: data.email,
          CustomerPassword: data.password,
        }
        const response = await registerCustomer(params);
        if (response[0]?.Status === "OK") {
          setStateRegister(true);
        }
        if (response[0]?.Status === "NOTOK") {
          setErrorApi(response[0]?.ResultMessage);
        }
      } catch (error) {
      }
    }
  };

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
      <div className="absolute inset-0 z-10 flex justify-center items-center rounded-md">
        <div className="flex w-[600px] flex-col justify-center px-6 py-12 lg:px-8 bg-white rounded-md">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center text-2xl md:text-3xl font-bold leading-9 tracking-tight text-blue-900 uppercase">Đăng ký</h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-2" onSubmit={handleSubmit(handleRegister)}>
              <div>
                <label htmlFor="customer" className="block text-lg font-medium leading-6 text-gray-900">Tên khách hàng <span className="text-main">*</span></label>
                <div className="">
                  <input {...register("customer")} id="customer" name="customer" type="text" className="block w-full rounded-md indent-2 focus:outline-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" disabled={stateRegister} />
                  <div className="h-[17px] overflow-hidden">{errors?.customer && <p className="text-yellow-600 text-sm">{errors.customer.message}</p>}</div>
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-lg font-medium leading-6 text-gray-900">Số điện thoại <span className="text-main">*</span></label>
                <div className="">
                  <input {...register("phone")} id="phone" name="phone" type="text" className="block w-full rounded-md indent-2 focus:outline-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" disabled={stateRegister} />
                  <div className="h-[17px] overflow-hidden">{errors?.phone && <p className="text-yellow-600 text-sm">{errors.phone.message}</p>}</div>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium leading-6 text-gray-900">Email </label>
                <div className="">
                  <input {...register("email")} id="email" name="email" autoComplete="email" className="block w-full rounded-md indent-2 focus:outline-none outline-none bg-transparent border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" disabled={stateRegister} />
                  <div className="h-[17px] overflow-hidden">{errors?.email && <p className="text-yellow-600 text-sm">{errors.email.message}</p>}</div>
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <label htmlFor="password" className="block text-lg font-medium leading-6 text-gray-900">Mật khẩu <span className="text-main">*</span></label>
                </div>
                <div className="">
                  <div className="relative">
                    <input
                      {...register("password")}
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      className="indent-2 focus:outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                      disabled={stateRegister}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-4 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword
                        ?
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
                        :
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
                      }
                    </button>
                  </div>
                  <div className="h-[17px] overflow-hidden">
                    {errors?.password && <p className="text-yellow-600 text-sm">{errors.password.message}</p>}
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <label htmlFor="confirmPassword" className="block text-lg font-medium leading-6 text-gray-900">Nhập lại mật khẩu <span className="text-main">*</span></label>
                </div>
                <div className="">
                  <div className="relative">
                    <input
                      {...register("confirmPassword")}
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      className="indent-2 focus:outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                      disabled={stateRegister}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-4 flex items-center"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword
                        ?
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
                        :
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
                      }
                    </button>
                  </div>
                  <div className="h-[17px] overflow-hidden">
                    {errors?.confirmPassword && <p className="text-yellow-600 text-sm">{errors.confirmPassword.message}</p>}
                  </div>
                </div>
              </div>
              <div>
                <input type="submit" className={`flex w-full justify-center rounded-md px-3 py-2 mt-10 text-xl hover:cursor-pointer  leading-8 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${stateRegister ? "bg-lime-500" : "bg-sky-500/75 hover:bg-sky-500"}`} value={stateRegister ? "Đăng ký thành công" : "Đăng ký"} />
              </div>
              <div className="h-[40px] overflow-hidden">
                {errorApi && <p className="text-yellow-600 text-sm text-center">{errorApi}</p>}
              </div>
              <div className="w-full mt-2 flex justify-center items-center">
                <p className="text-sm text-black leading-6">Bạn đã có tài khoản ? <Link href={"/login"} className="text-indigo-600 hover:text-indigo-500" >Đăng nhập</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Register;
