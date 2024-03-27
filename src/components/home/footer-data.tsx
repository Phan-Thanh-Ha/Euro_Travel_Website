import { handleDataSetting } from "@/utils/handleDataSetting";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import EmailRegisterForm from "../forms/email-resgister-form";
import { fetchSetting } from "@/actions/setting";

export default async function FooterData() {
  /* let setting = await handleDataSetting(dataSetting);
  let address = setting?.Address.split(';') */
  const dataSetting = await fetchSetting({
    GroupId: process.env.NEXT_PUBLIC_GROUPID,
  });
  let setting = await handleDataSetting(dataSetting);
  return (
    <>
      <div className="container lg:py-4 py-4">
        <div className="grid md:grid-cols-7 grid-cols-1 md:gap-10 gap-2">
          <div className="text-center md:col-span-2 col-span-1">
            <Link
              className={`flex overflow-hidden rounded-t-lg justify-center p-3`}
              href={`/`}
            >
              <Image
                className="h-14 md:h-24"
                src={setting?.Logo || ""}
                alt={setting?.CompanyName}
                width={170}
                height={100}
              />
            </Link>
          </div>
          <div className="text-blue-default font-bold py-2 md:col-span-2 col-span-1 lg:pt-8">
            Đăng ký Email để nhận thông tin sớm nhất từ EuroTravel
          </div>
          <div className=" md:col-span-3 col-span-1 md:pt-10">
            <EmailRegisterForm />
          </div>
        </div>
      </div>
      <div className="container lg:py-4 py-4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-7">
          <div className="md:col-span-2 col-span-1">
            <p className="text-xl font-bold text-main">THÔNG TIN DOANH NGHIỆP</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                Giấy phép kinh doanh số:
                <span className="md:flex-1 font-bold">0315217704</span>
              </li>
              <li>Đăng ký: 10/08/2018</li>
              <li>Nơi cấp: Sở kế hoạch và đầu tư TP Hồ Chí Minh.</li>
              <li>Giấy phép kinh doanh Lữ Hành Quốc Tế số: <span className="font-bold">79-901/2018/TCDL-GP LHQT</span></li>
            </ul>
          </div>
          <div className="md:col-span-3 col-span-1">
            <p className="text-xl font-bold text-main">THÔNG TIN LIÊN HỆ</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                Trụ sở chính: {setting?.AddressMain}
              </li>
              <li>
                Văn phòng Hà Nội:  {setting?.Address}
              </li>
              <li>
                Điện thoại: <Link className="text-blue-default-50" href={`tel:${setting?.Phone}`}>{setting?.Phone}</Link>
              </li>
              <li>
                Hotline: <Link className="text-blue-default-50" href={`tel:${setting?.Hotline}`}>{setting?.Hotline}</Link>
              </li>
              <li>Email: <Link className="text-blue-default-50" href={`mailto:${setting?.Email}`}>{setting?.Email}</Link></li>
            </ul>
          </div>
          <div className="md:col-span-2 col-span-1">
            <p className="text-xl font-bold text-main">VỀ CHÚNG TÔI</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  className="transition text-blue-default-50 hover:text-main"
                  href="/gioi-thieu"
                >
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link
                  className="transition text-blue-default-50 hover:text-main"
                  href="/chinh-sach-bao-mat"
                >
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link
                  className="transition text-blue-default-50 hover:text-main"
                  href={`/chinh-sach-hoan-huy-dich-vu`}
                >
                  Chính sách hoàn hủy dịch vụ
                </Link>
              </li>
              <li>
                <Link
                  className="transition text-blue-default-50 hover:text-main"
                  href={`/dieu-khoan-dich-vu`}
                >
                  Điều khoản dịch vụ
                </Link>
              </li>
              <li>
                <Link
                  className="transition text-blue-default-50 hover:text-main"
                  href="/phuong-thuc-thanh-toan"
                >
                  Phương thức thanh toán
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container lg:py-4 py-4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-7">
          <div className="md:col-span-2 col-span-1 flex flex-row gap-0.5">
            <span className="text-sm mt-2">Mạng xã hội:</span>
            <Link target="_blank" href={setting?.Facebook || "/"} title="Follow on Facebook" rel="noopener noreferrer nofollow">
              <Image width={30} height={30} src="/images/facebook.png" alt="" />
            </Link>
            <Link target="_blank" href={setting?.Instagram || "/"} title="Follow on Instagram" rel="noopener noreferrer nofollow">
              <Image width={30} height={30} src="/images/instagram.png" alt="" />
            </Link>
            <Link target="_blank" href={setting?.Tiktok || "/"} title="Follow on Tiktok" rel="noopener noreferrer nofollow">
              <Image width={30} height={30} src="/images/tiktok.png" alt="" />
            </Link>
            <Link target="_blank" href={setting?.Twitter || "/"} title="Follow on Twitter" rel="noopener noreferrer nofollow">
              <Image width={30} height={30} src="/images/twitter.png" alt="" />
            </Link>
            <Link target="_blank" href={setting?.Pinterest || "/"} title="Follow on Pinterest" rel="noopener noreferrer nofollow">
              <Image width={30} height={30} src="/images/pinterest.png" alt="" />
            </Link>
            <Link target="_blank" href={setting?.LinkedIn || "/"} title="Follow on LinkedIn" rel="noopener noreferrer nofollow">
              <Image width={30} height={30} src="/images/linkedin.png" alt="" />
            </Link>
            <Link target="_blank" href={setting?.Youtube || "/"} title="Follow on Youtube" rel="noopener noreferrer nofollow">
              <Image width={30} height={30} src="/images/youtube.png" alt="" />
            </Link>
          </div>
          <div className="md:col-span-3 col-span-1 flex flex-row w-full gap-3">
            <Link target="_blank" href={setting?.MinistryOfIndustry || "http://online.gov.vn/Home/WebDetails/54220"} title="Đã thông báo với bộ công thương" rel="noopener noreferrer nofollow">
              <Image
                src="/images/website-bao-voi-bo-cong-thuong_cong-ty-euro-travel.png"
                alt={setting?.CompanyName}
                width={170}
                height={70}
                className="-mt-2"
              />
            </Link>
            <Link target="_blank" href={setting?.Compliance || "https://www.dmca.com/compliance/eurotravel.com.vn"} title="Follow on Youtube" rel="noopener noreferrer nofollow">
              <Image
                src="/images/dmca-compliant-white-bg.png"
                alt={setting?.CompanyName}
                width={170}
                height={50}
              />
            </Link>
          </div>
          <div className="md:col-span-2 col-span-1">
            <h4 className="font-bold text-main">Chấp nhận thanh toán</h4>
            <Image width="400" height="67" src="/images/payment-logo.png" className="attachment-large size-large" alt="" decoding="async" />
          </div>
        </div>
      </div>
      <div className="bg-main lg:py-4 py-4">
        <div className="container mx-auto text-center flex items-center justify-center">
          <p className="mt-4 text-sm text-white  sm:mt-0">
            © 2023 <strong>{setting?.CompanyName}</strong>. Designed by{" "}
            <a
              href="https://cak-solution.com/"
              className="text-white underline font-bold italic"
            >
              CAK Solution
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
/* "use client";
import useGlobalState from "@/hooks/useGlobalState";
import { addSetting } from "@/store";
import React, { useEffect, useState } from "react";
import envConfig from "../../../config";
import Link from "next/link";
import { handleDataSetting } from "@/utils/handleDataSetting";
import Image from "next/image";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function FooterData({ settingData = [] }) {
  const [globalState, dispatch] = useGlobalState();
  const [log, setlog] = useState();
  useEffect(() => {
    let dataSetting = handleDataSetting(settingData);
    dispatch(addSetting(dataSetting));
  }, [settingData]);

  const { setting } = globalState;

  return (
    <>
      <div className="grid lg:grid-cols-3 grid-cols-1">
        <div>
          <Link
            className={`flex h-32 md:h-60 overflow-hidden rounded-t-lg justify-center p-3`}
            href={`/`}
          >
            <Image
              src={
                setting.Logo
              }
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="banner"
              width={170}
              height={100}
              style={{ width: "auto", height: "100%" }}
              className="rounded-lg object-cover w-auto h-full"
            />
          </Link>
        </div>
        <div className="text-blue-default">
          Đăng ký Email để nhận thông tin sớm nhất từ EuroTravel
        </div>
        <div className="flex w-full max-w-sm items-center space-x-4">
          <Input type="email" placeholder="Email" />
          <Button type="submit">Subscribe</Button>
        </div>
      </div>
      <div className="lg:container">
        <div className="mx-auto max-w-screen-xl px-4 pt-6 pb-6 lg:pt-10 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="text-center sm:text-left md:col-span-2">
              <p className="text-xl font-bold">Thông tin liên hệ</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <span className="md:flex-1 font-bold">
                    {setting.NameAdress}
                  </span>
                </li>
                <li className="flex items-start justify-center font-bold gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 shrink-0 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
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
                  <address className="md:flex-1 not-italic ">
                    {setting.ShowroomAddress}
                  </address>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 shrink-0 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="md:flex-1 ">{setting.Email}</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="md:flex-1 ">
                      {setting.Hotline}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="/"
                  >
                    <span className="md:flex-1 ">
                      Quý khách vui lòng đặt lịch hẹn trước khi tới !
                    </span>
                  </a>
                </li>
                <li className="text-[10px] text-black flex flex-col gap-2 pt-4">
                  <div className=" font-bold">
                    <span>CÔNG TY CỔ PHẦN DQTECH - MST: 0315515362</span>
                  </div>
                  <span>
                    Đc: 542/12/8A Nguyễn Ảnh Thủ, KP4, P. Hiệp Thành, Quận 12,
                    TP.HCM
                  </span>
                  <div className="flex flex-row items-center justify-center md:justify-start">
                    <>
                      <a href="http://online.gov.vn/Home/WebDetails/53205">
                        <picture>
                          <source
                            // srcSet={bocongthuong}
                            type="image/webp"
                            width={171}
                            height={56}
                          />
                          <source
                            srcSet="/estore-images/fallback-images/default/img-default-3_1.svg"
                            type="image/webp"
                            width={171}
                            height={56}
                          />
                          <img
                            loading="lazy"
                            decoding="async"
                            alt="certificate-icon"
                            src="/estore-images/fallback-images/error/img-error-3_1.svg"
                          />
                        </picture>
                      </a>
                    </>
                  </div>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-xl font-bold">Về chúng tôi</p>
              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <Link
                    className="transition"
                    href="/chinh-sach-bao-hanh"
                  >
                    Chính sách bảo hành
                  </Link>
                </li>
                <li>
                  <Link
                    className="transition"
                    href={`/tu-van-khach-hang`}
                  >
                    Tư vấn khách hàng
                  </Link>
                </li>
                <li>
                  <Link
                    className="transition"
                    href={`/huong-dan-thanh-toan`}
                  >
                    Hướng dẫn mua hàng & thanh toán
                  </Link>
                </li>
                <li>
                  <Link
                    className="transition "
                    href="/bao-mat-thong-tin"
                  >
                    Bảo mật thông tin
                  </Link>
                </li>
                <li>
                  <Link
                    className="transition"
                    href="/ho-tro-ky-thuat"
                  >
                    Hỗ trợ kỹ thuật
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-center sm:text-left ">
              <p className="text-xl font-bold">
                {"Thống kê truy cập"}
              </p>
              <ul className="mt-8 space-y-4 text-sm">
                <li className=" grid grid-cols-2">
                  <span>Đang online: </span>
                  <span>{log?.TotalOnline || 0} </span>
                </li>
                <li className="grid grid-cols-2">
                  <span>Trong ngày: </span>
                  <span>{log?.AccessToday || 0} </span>
                </li>
                <li className="grid grid-cols-2">
                  <span>Trong tuần: </span>
                  <span>{log?.AccessThisWeek || 0} </span>
                </li>
                <li className="grid grid-cols-2">
                  <span>Trong tháng: </span>
                  <span>{log?.AccessThisMonth || 0} </span>
                </li>
                <li className="grid grid-cols-2 font-bold">
                  <span>Tổng truy cập: </span>
                  <span>{log?.TotalAccess || 0}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-main py-6">
        <div className="container mx-auto text-center flex items-center justify-center">
          <p className="mt-4 text-sm text-white  sm:mt-0">
            © 2023 <strong>{setting.CompanyName}</strong>. Designed by{" "}
            <a
              href="https://cak-solution.com/"
              className="text-white underline font-bold italic"
            >
              CAK Solution
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
 */
