import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

export default function AboutUsSection({ setting }: { setting: any }) {
  return (
    <section className="lg:container px-2  md:px-0">
      <div className="flex flex-col items-center">
        <h2 className="text-lg md:text-2xl font-bold text-main my-8  uppercase">
          Giới thiệu về EuroTravel
          <Separator className="my-2" />
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="">
          <Image
            src={setting.ImageAboutUsHome}
            width={900}
            height={600}
            className="w-full h-52 md:h-96 rounded-lg"
            alt="about us"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-red-100 p-2 py-3 md:p-4 rounded-lg flex flex-col gap-2">
            <div className="text-main uppercase text-sm md:text-lg font-bold text-center ">
              độc lạ - đẳng cấp
            </div>
            <p className="flex flex-row gap-2 text-sm md:text-base">
              <CheckSvg />
              Địa danh nổi tiếng
            </p>

            <p className="flex flex-row gap-2 text-sm md:text-base">
              <CheckSvg />
              Thắng cảnh độc đáo
            </p>
            <p className="flex flex-row gap-2 text-sm md:text-base">
              <CheckSvg />
              Trải nghiệm ấn tượng
            </p>
          </div>
          <div className="bg-red-100 p-2 py-3 md:p-4 rounded-lg  flex flex-col gap-2">
            <div className="text-main uppercase text-sm md:text-lg font-bold text-center">
              TRỌN GÓI DỊCH VỤ
            </div>
            <p className="flex flex-row gap-2 text-sm md:text-base">
              <CheckSvg />
              HÀNG KHÔNG 5* đẳng cấp
            </p>
            <p className="flex flex-row gap-2 text-sm md:text-base">
              <CheckSvg />
              Hệ thống KHÁCH SẠN 4-5* thương hiệu quốc tế
            </p>
            <p className="flex flex-row gap-2 text-sm md:text-base">
              <CheckSvg />
              Bữa ăn đặc sắc, mang đậm dấu ấn ẩm thực, văn hóa
            </p>
          </div>
          <div className="bg-red-100 p-2 py-3 md:p-4 rounded-lg  flex flex-col gap-2">
            <div className="text-main uppercase text-sm md:text-lg font-bold text-center">
              CAM KẾT ĐẬU VISA 100%
            </div>
            <p className="flex flex-row gap-2 text-sm md:text-base">
              <CheckSvg />
              Hồ sơ đơn giản
            </p>
            <p className="flex flex-row gap-2 text-sm md:text-base">
              <CheckSvg />
              Thủ tục nhanh chóng
            </p>
            <p className="flex flex-row gap-2 text-sm md:text-base">
              <CheckSvg />
              Tỉ lệ đậu Visa 100%
            </p>
          </div>
          <div className="bg-red-100 p-2 py-3 md:p-4 rounded-lg flex flex-col gap-2">
            <div className="text-main uppercase text-sm md:text-lg font-bold text-center ">
              NHÂN SỰ TẬN TÂM
            </div>
            <p className="flex flex-row gap-2 text-sm md:text-base">
              <CheckSvg />
              Thái độ ân cần, niềm nở
            </p>
            <p className="flex flex-row gap-2 text-sm md:text-base">
              <CheckSvg />
              Kỹ năng chuyển nghiệp, khéo léo
            </p>
            <p className="flex flex-row gap-2 text-sm md:text-base">
              <CheckSvg />
              Chăm sóc khách hàng chu đáo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const CheckSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-check-check stroke-main flex-none h-[12px] w-[12px] md:h-[20px] md:w-[20px]"
  >
    <path d="M18 6 7 17l-5-5" />
    <path d="m22 10-7.5 7.5L13 16" />
  </svg>
);
