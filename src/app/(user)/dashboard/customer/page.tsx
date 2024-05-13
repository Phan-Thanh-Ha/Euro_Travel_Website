"use client";
import { authConfig } from "@/lib/auth";
import { DecodeObject } from "@/utils/DecodeString";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import { useSession } from "next-auth/react";

interface IFrom {
  CustomerName: string;
  Email: string;
  Phone: string;
  CCCD: string;
  Address: string;
  Passport: string;
  Gender: boolean;
  CreateDate: Date;
}

const valid: Resolver<IFrom> = async (values) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,15}$/;
  const passportRegex = /^(?!^0+$)[a-zA-Z0-9]{3,20}$/;
  const regexCCCD = /^\d{9,12}$/;

  const errors: any = {};
  if (!regexCCCD.test(values.CCCD)) {
    errors.CCCD = {
      type: "required",
      message: "CCCD không hợp lệ.",
    };
  }
  if (!values.Address) {
    errors.Address = {
      type: "required",
      message: "Nhập địa chỉ.",
    };
  }
  if (!values.Phone) {
    errors.Phone = {
      type: "required",
      message: "Nhập số điện thoại.",
    };
  }
  if (!phoneRegex.test(values.Phone)) {
    errors.Phone = {
      type: "required",
      message: "Số điện thoại không đúng.",
    };
  }
  if (!passportRegex.test(values.Passport)) {
    errors.Passport = {
      type: "required",
      message: "Mã Passport không hợp lệ.",
    };
  }
  if (!emailRegex.test(values.Email)) {
    errors.Email = {
      type: "validatePhoneOrEmail",
      message: "Email không đúng định dạng.",
    };
  }
  return {
    values: Object.keys(errors).length === 0 ? values : {},
    errors,
  };
};
const Customer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<IFrom>({
    /* resolver: valid */
  });

  const [user, setUser] = useState<any>({});
  const [edit, setEdit] = useState(false);
  const watchGender = watch("Gender");
  useEffect(() => {
    // getUserLogin();
    // setValue("Gender", true);
  }, []);
  const getUserLogin = () => {
    try {
      const storage = window.localStorage.getItem("userLogin");
      const data = DecodeObject(storage || "");
      setUser(data || {});
      console.log(data);
    } catch (error) {}
  };

  const handleEdit = () => {
    setEdit(!edit);
  };
  const handleUpdateProfile: SubmitHandler<IFrom> = async (data) => {
    console.log("====================================");
    console.log("data :", data);
    console.log("====================================");
    console.log("====================================");
    console.log("user : ", user);
    console.log("====================================");
    /* state change */
  };
  const { data: session } = useSession(); // data thông tin user đăng nhập bằng google
  console.log("🚀🚀🚀 ======== session========", session);

  return (
    <div className="w-full h-screen flex justify-center rounded-xl">
      <div className="container bg-white rounded-md pb-3 my-3">
        <div className="rounded-t-lg h-[200px] overflow-hidden">
          <Image
            className="object-cover object-top w-full"
            src="/images/bg5.jpg"
            alt="Mountain"
            width={400}
            height={200}
            quality={100}
          />
        </div>
        <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
          <Image
            src={"/images/bg5.jpg"}
            width={10}
            height={10}
            quality={100}
            alt="profile"
            className="w-full h-full rounded-full object-cover fill-none shadow-sm border object-center bg-white"
          />
        </div>
        <div className="flex justify-center w-full items-center">
          <h1 className="text-center text-2xl uppercase text-main md:py-4 font-bold">
            {session?.user?.name}
          </h1>
        </div>
        <hr className="my-6" />
        <form onSubmit={handleSubmit(handleUpdateProfile)}>
          <div className="grid grid-cols-1 md:grid-cols-2 px-4 gap-4 md:my-10">
            <div className="col-span-1">
              <div className="w-full my-2">
                <label className="text-[18px] text-black">
                  Tên khách hàng{" "}
                  <span className={`${edit ? "" : "hidden"} text-red-500`}>
                    *
                  </span>
                </label>
                <div className="w-full inline-flex border rounded-md mt-1">
                  <div className="pt-2 w-1/12 bg-sky-50 rounded-sm">
                    <svg
                      fill="none"
                      className="w-6 text-gray-700 mx-auto"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    {...register("CustomerName")}
                    className="w-full rounded-md focus:outline-none focus:text-gray-600 p-2 bg-white"
                    defaultValue={user?.CustomerName}
                    placeholder="Tên khách hàng"
                    disabled={!edit}
                  />
                  <div className="pt-2 w-1/12 rounded-sm">
                    {edit && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-pencil w-6 text-gray-500 mx-auto"
                      >
                        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                        <path d="m15 5 4 4" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full my-2">
                <label className="text-[18px] text-black">
                  Số điện thoại
                  <span className={`${edit ? "" : "hidden"} text-red-500`}>
                    *
                  </span>
                </label>
                <div className="w-full inline-flex border rounded-md mt-1">
                  <div className="pt-2 w-1/12 bg-sky-50 rounded-sm">
                    <svg
                      fill="none"
                      className="w-6 text-gray-700 mx-auto"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="w-full rounded-md focus:outline-none focus:text-gray-600 p-2 bg-white"
                    defaultValue={user?.Phone}
                    {...register("Phone")}
                    placeholder="Số điện thoại"
                    disabled={!edit}
                  />
                  <div className="pt-2 w-1/12 rounded-sm">
                    {edit && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-pencil w-6 text-gray-500 mx-auto"
                      >
                        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                        <path d="m15 5 4 4" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full my-2">
                <label className="text-[18px] text-black">
                  Địa chỉ{" "}
                  <span className={`${edit ? "" : "hidden"} text-red-500`}>
                    *
                  </span>
                </label>
                <div className="w-full inline-flex border rounded-md mt-1">
                  <div className="pt-2 w-1/12 bg-sky-50 rounded-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-map-pin w-6 text-gray-700 mx-auto"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx={12} cy={10} r={3} />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="w-full rounded-md focus:outline-none focus:text-gray-600 p-2 bg-white"
                    defaultValue={user?.address}
                    {...register("Address")}
                    placeholder="Chưa có dữ liệu"
                    disabled={!edit}
                  />
                  <div className="pt-2 w-1/12 rounded-sm">
                    {edit && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-pencil w-6 text-gray-500 mx-auto"
                      >
                        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                        <path d="m15 5 4 4" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full my-2">
                <label className="text-[18px] text-black">
                  Giới tính
                  <span className={`${edit ? "" : "hidden"} text-red-500`}>
                    *
                  </span>
                </label>
                <div className="w-full inline-flex border rounded-md mt-1">
                  <div className="p-2 w-1/12 bg-sky-50 rounded-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-person-standing w-6 text-gray-700 mx-auto"
                    >
                      <circle cx={12} cy={5} r={1} />
                      <path d="m9 20 3-6 3 6" />
                      <path d="m6 8 6 2 6-2" />
                      <path d="M12 10v4" />
                    </svg>
                  </div>
                  <div className="w-full flex justify-center items-center">
                    <div className="flex gap-4 justify-center items-center mx-10">
                      Nam
                      <input
                        type="radio"
                        value={0}
                        defaultChecked={user?.Gender === 0}
                        className="w-full rounded-md focus:outline-none focus:text-gray-600 p-2 bg-white h-[18px]"
                        {...register("Gender")}
                        disabled={!edit}
                      />
                    </div>
                    <div className="flex gap-4 justify-center items-center mx-10">
                      Nữ
                      <input
                        type="radio"
                        defaultChecked={user?.Gender === 1}
                        className="w-full rounded-md focus:outline-none focus:text-gray-600 p-2 bg-white h-[18px]"
                        value={1}
                        {...register("Gender")}
                        disabled={!edit}
                      />
                    </div>
                  </div>
                  <div className="pt-2 w-1/12 rounded-sm">
                    {edit && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-pencil w-6 text-gray-500 mx-auto"
                      >
                        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                        <path d="m15 5 4 4" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="w-full my-2">
                <label className="text-[18px] text-black">Email</label>
                <div className="w-full inline-flex border rounded-md mt-1">
                  <div className="pt-2 w-1/12 bg-sky-50 rounded-sm">
                    <svg
                      fill="none"
                      className="w-6 text-gray-700 mx-auto"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="w-full rounded-md focus:outline-none focus:text-gray-600 p-2 bg-white"
                    defaultValue={user?.Email}
                    {...register("Email")}
                    placeholder="Email"
                    disabled={!edit}
                  />
                  <div className="pt-2 w-1/12 rounded-sm">
                    {edit && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-pencil w-6 text-gray-500 mx-auto"
                      >
                        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                        <path d="m15 5 4 4" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full my-2">
                <label className="text-[18px] text-black">Số CCCD</label>
                <div className="w-full inline-flex border rounded-md mt-1">
                  <div className="pt-2 w-1/12 bg-sky-50 rounded-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-clipboard-pen w-6 text-gray-700 mx-auto"
                    >
                      <rect width={8} height={4} x={8} y={2} rx={1} />
                      <path d="M10.4 12.6a2 2 0 0 1 3 3L8 21l-4 1 1-4Z" />
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5" />
                      <path d="M4 13.5V6a2 2 0 0 1 2-2h2" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Chưa có dữ liệu"
                    {...register("CCCD")}
                    disabled={!edit}
                    className="w-full focus:outline-none focus:text-gray-600 p-2"
                  />
                  <div className="pt-2 w-1/12 rounded-sm">
                    {edit && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-pencil w-6 text-gray-500 mx-auto"
                      >
                        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                        <path d="m15 5 4 4" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full my-2">
                <label className="text-[18px] text-black">Passport</label>
                <div className="w-full inline-flex border rounded-md mt-1">
                  <div className="pt-2 w-1/12 bg-sky-50 rounded-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-clipboard-pen-line w-6 text-gray-700 mx-auto"
                    >
                      <rect width={8} height={4} x={8} y={2} rx={1} />
                      <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5" />
                      <path d="M16 4h2a2 2 0 0 1 1.73 1" />
                      <path d="M8 18h1" />
                      <path d="M18.4 9.6a2 2 0 0 1 3 3L17 17l-4 1 1-4Z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="w-full rounded-md focus:outline-none focus:text-gray-600 p-2 bg-white"
                    defaultValue={user?.passport}
                    {...register("Passport")}
                    placeholder="Chưa có dữ liệu"
                    disabled={!edit}
                  />
                  <div className="pt-2 w-1/12 rounded-sm">
                    {edit && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-pencil w-6 text-gray-500 mx-auto"
                      >
                        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                        <path d="m15 5 4 4" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full my-2">
                <label className="text-[18px] text-black">
                  Thời gian đăng ký
                </label>
                <div className="w-full inline-flex border rounded-md mt-1">
                  <div className="pt-2 w-1/12 bg-sky-50 rounded-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-calendar-plus w-6 text-gray-700 mx-auto"
                    >
                      <path d="M8 2v4" />
                      <path d="M16 2v4" />
                      <path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" />
                      <path d="M3 10h18" />
                      <path d="M16 19h6" />
                      <path d="M19 16v6" />
                    </svg>
                  </div>
                  <input
                    type="Date"
                    className="w-full rounded-md focus:outline-none focus:text-gray-600 p-2 bg-white"
                    // defaultValue={
                    //   user
                    //     ? new Date(user?.CreateDate).toISOString().substr(0, 10)
                    //     : ""
                    // }
                    {...register("CreateDate")}
                    placeholder="Chưa có dữ liệu"
                    disabled={!edit}
                  />
                  <div className="pt-2 w-1/12 rounded-sm">
                    {edit && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-pencil w-6 text-gray-500 mx-auto"
                      >
                        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                        <path d="m15 5 4 4" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr />
          <div className="w-full p-4 text-right text-black sm:block md:flex justify-end">
            <div className="flex justify-end items-center">
              <button
                className="inline-flex items-center focus:outline-none m-1 py-2 px-4 bg-yellow-300 text-black rounded-md"
                onClick={handleEdit}
              >
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
                  className="lucide lucide-file-pen-line w-4 mr-2"
                >
                  <path d="m18 5-3-3H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" />
                  <path d="M8 18h1" />
                  <path d="M18.4 9.6a2 2 0 1 1 3 3L17 17l-4 1 1-4Z" />
                </svg>
                Chỉnh sửa
              </button>
              <button
                className="inline-flex items-center focus:outline-none m-1 py-2 px-4 bg-blue-600 text-white rounded-md"
                type="submit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-refresh-cw w-4 mr-2"
                >
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                  <path d="M21 3v5h-5" />
                  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                  <path d="M8 16H3v5" />
                </svg>
                Cập nhật thông tin
              </button>
            </div>
          </div>
          <div className="flex justify-end items-center">
            <button className="inline-flex items-center focus:outline-none m-1 py-2 px-4 bg-white border text-black rounded-md">
              <svg
                fill="none"
                className="w-4 mr-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              Xóa tài khoản
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Customer;
