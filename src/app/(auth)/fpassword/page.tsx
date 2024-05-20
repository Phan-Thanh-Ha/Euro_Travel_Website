"use client"

import EmaliInputForm from "@/components/forms/email-input-form";
import ForgotPasswordForm from "@/components/forms/new-password-form";
import { OTPInputForm } from "@/components/forms/otp-input-form";
import Image from "next/image";
import { useState } from "react";
import { useParams } from 'next/navigation'
import { useRouter } from "next/navigation";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [emailSubmit, setEmailSubmit] = useState(false);
  const [otpSubmit, setOtpSubmit] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const handleSteps2 = () => {
    if (emailSubmit) {
      setCurrentStep(2);
      setOtpSubmit(false);
      setOtp("");
    }
  }
  const handleSteps1 = () => {
    setCurrentStep(1);
    setEmailSubmit(false);
    setEmail("");
    setOtpSubmit(false);
    setOtp("");
  }
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
          {/*  */}
          <div className="py-4">
            <div className="flex justify-center items-center">
              <div className="w-full md:w-4/6">
                <div className="after:mt-4 after:block after:h-1 after:w-full after:rounded-lg after:bg-gray-200">
                  <ol className="grid grid-cols-3 text-sm font-medium text-gray-500">
                    {/* 1 */}
                    <li className={`relative flex justify-start ${currentStep >= 1 ? "text-two" : "text-main"} cursor-pointer`} onClick={handleSteps1}>
                      <span className={`absolute -bottom-[1.75rem] start-0 rounded-full ${currentStep >= 1 ? "bg-two" : "bg-main"} text-white`}>
                        <svg
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="hidden sm:block"> Email </span>
                      <svg
                        className="size-6 sm:hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                        />
                      </svg>
                    </li>
                    {/* 2 */}
                    <li className={`relative flex justify-center ${currentStep >= 2 ? "text-two" : "text-main"} cursor-pointer`} onClick={handleSteps2}>
                      <span
                        className={`absolute -bottom-[1.75rem] left-1/2 -translate-x-1/2 rounded-full ${currentStep >= 2 ? "bg-two" : "bg-main"} text-white`}
                      >
                        <svg
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="hidden sm:block"> Xác thực </span>
                      <svg
                        className="mx-auto size-6 sm:hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </li>
                    {/* 3 */}
                    <li className={`relative flex justify-end ${currentStep >= 3 ? "text-two" : "text-main"} cursor-pointer`} onClick={() => otpSubmit ? setCurrentStep(3) : {}}>
                      <span className={`absolute -bottom-[1.75rem] end-0 rounded-full ${currentStep >= 3 && otpSubmit ? "bg-two" : "bg-main"} text-white`}>
                        <svg
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="hidden sm:block">Mật khẩu</span>
                      <svg
                        className="size-6 sm:hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        />
                      </svg>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          {
            currentStep === 1 &&
            (
              <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-10">
                < EmaliInputForm setValue={setEmail} setSubmit={setEmailSubmit} setStep={setCurrentStep} />
              </div>
            )
          }
          {
            currentStep === 2 && emailSubmit &&
            (
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                < OTPInputForm setValue={setOtp} setSubmit={setOtpSubmit} otp={email} setStep={setCurrentStep} />
              </div>
            )
          }
          {
            currentStep === 3 && emailSubmit && otpSubmit &&
            (
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                < ForgotPasswordForm email={email} />
              </div>
            )
          }
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
            <a href="/login" className=" text-two hover:text-two">
              Đăng nhập
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}