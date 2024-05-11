"use client";
import { DecodeObject } from "@/utils/DecodeString";
import Image from "next/image";
import { useEffect, useState } from "react";
const Profile = () => {
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    getUserLogin();
  }, [])
  const getUserLogin = () => {
    try {
      const storage = window.localStorage.getItem('userLogin');
      const data = DecodeObject(storage || "");
      setUser(data || {});
      console.log(data);
    } catch (error) { }
  }

  return (
    <div className="w-full h-screen flex justify-center rounded-xl">
      <section className="py-10 bg-opacity-50">
        <div className="mx-auto container shadow-md">
          <div className="p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t">
            <div className="max-w-sm mx-auto md:w-full md:mx-0">
              <div className="inline-flex items-center space-x-4">
                <Image
                  className="w-10 h-10 object-cover rounded-full"
                  alt="User avatar"
                  src="/images/bg3.jpg"
                  quality={100}
                  width={30}
                  height={30}
                />

                <h1 className="text-main text-2xl uppercase">{user?.CustomerName}</h1>
              </div>
            </div>
          </div>
          <div className="bg-white space-y-6 border-b border-gray-500">
            <div className="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-black items-center">
              <h2 className="md:w-1/3 mx-auto max-w-sm">Thông tin khách hàng</h2>
              <div className="md:w-2/3 mx-auto max-w-sm space-y-5">
                <div className="w-full">
                  <label className="text-sm text-black">Tên khách hàng</label>
                  <div className="w-full inline-flex border">
                    <div className="w-1/12 pt-2 bg-gray-100">
                      <svg
                        fill="none"
                        className="w-6 text-black mx-auto"
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
                      disabled
                      type="text"
                      value={user?.CustomerName}
                      className="w-full focus:outline-none focus:text-gray-600 p-2"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label className="text-sm text-black">Email</label>
                  <div className="w-full inline-flex border">
                    <div className="w-1/12 pt-2 bg-gray-100">
                      <svg
                        fill="none"
                        className="w-6 text-black mx-auto"
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
                      disabled
                      type="text"
                      value={user?.Email}
                      className="w-full focus:outline-none focus:text-gray-600 p-2"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label className="text-sm text-black">Số điện thoại</label>
                  <div className="w-full inline-flex border">
                    <div className="pt-2 w-1/12 bg-gray-100">
                      <svg
                        fill="none"
                        className="w-6 text-black mx-auto"
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
                      className="w-full focus:outline-none focus:text-gray-600 p-2"
                      value={user?.Phone}
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-black items-center">
              <h2 className="md:w-1/3 mx-auto max-w-sm">Tài khoản đăng nhập</h2>
              <div className="md:w-2/3 mx-auto max-w-sm space-y-5">
                <div>
                  <label className="text-sm text-black">Mật khẩu cũ <span className="text-main">*</span></label>
                  <div className="w-full inline-flex border">
                    <div className="w-1/12 pt-2 bg-gray-100"><svg
                      fill="none"
                      className="w-6 text-black mx-auto"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    </div>
                    <input
                      type="password"
                      placeholder="*******"
                      disabled
                      className="w-full focus:outline-none focus:text-gray-600 p-2"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-black">Mật khẩu mới <span className="text-main">*</span></label>
                  <div className="w-full inline-flex border">
                    <div className="pt-2 w-1/12 bg-gray-100"><svg
                      fill="none"
                      className="w-6 text-black mx-auto"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    </div>
                    <input
                      type="password"
                      className="w-full focus:outline-none focus:text-gray-600 p-2"
                      placeholder="********"
                      disabled
                    />
                  </div>
                </div>
                <div className="md:w-full text-center">
                  <button className="text-white w-full mx-auto max-w-sm rounded-md text-center bg-indigo-400 py-2 px-4 flex items-center justify-center focus:outline-none md:float-right">
                    <svg
                      fill="none"
                      className="w-4 text-white mr-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    Cập nhật
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-end mr-[80px]">

            </div>
            <hr />
            <div className="w-full p-4 text-right text-black">
              <button className="inline-flex items-center focus:outline-none mr-4">
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
                Xóa thông tin tài khoản
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
