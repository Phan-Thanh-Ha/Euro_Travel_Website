import MotionLayout from "@/components/motion-layout";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutUsSection({ setting }: { setting: any }) {
  return (
    <MotionLayout>
      <section className="lg:container px-2  md:px-0  mt-12">
        {/* <div className="flex flex-row items-center justify-between">
          <h2 className="text-lg md:text-2xl font-bold text-main my-8  uppercase">
            Giới thiệu về EuroTravel
            <Separator className="my-2" />
          </h2>
        </div> */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="">
            {/* <Image
              src={setting.ImageAboutUsHome}
              width={900}
              height={600}
              className="w-full h-52 md:h-96 rounded-lg"
              alt="about us"
            /> */}
            <h3 className="md:text-xl font-semibold text-two mb-4">
              Về chúng tôi
            </h3>
            <h2 className="text-xl md:text-3xl text-two font-bold my-4">
              EuroTravel - Đối tác du lịch tận tâm, mang đến trải nghiệm Châu Âu
              đích thực.
            </h2>
            <p className="font-medium text-two">
              EuroTravel - Đối tác du lịch tận tâm, mang đến trải nghiệm Châu Âu
              đích thực. Từ những kỳ nghỉ thiên nhiên đến những chuyến tham quan
              văn hóa, EuroTravel sẵn sàng đồng hành cùng bạn khám phá những
              điều tuyệt vời nhất tại Châu Âu.
            </p>
            <Link href={"/search"}>
              <Button
                className="md:text-xl mt-5 bg-two/80 p-4  md:p-6 text-white hover:bg-main/80 hover:text-white font-semibold flex flex-row gap-2 items-center"
                variant={"ghost"}
              >
                Tìm kiếm tour ngay
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
                  className="lucide lucide-arrow-right w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 mb-5 ">
            <h3 className="text-lg md:text-xl font-semibold text-two md:mb-2 mt-8 mb-0 md:mt-0">
              Vì sao chọn EuroTravel
            </h3>
            <MotionLayout>
              <div className="bg-sky-100/70 p-2 py-3 md:p-4 rounded-lg flex flex-col gap-2">
                <div className="text-two uppercase text-sm md:text-lg font-bold text-center ">
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
            </MotionLayout>
            <MotionLayout>
              <div className="bg-sky-100/70 p-2 py-3 md:p-4 rounded-lg  flex flex-col gap-2">
                <div className="text-two uppercase text-sm md:text-lg font-bold text-center">
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
            </MotionLayout>
            <MotionLayout>
              <div className="bg-sky-100/70 p-2 py-3 md:p-4 rounded-lg  flex flex-col gap-2">
                <div className="text-two uppercase text-sm md:text-lg font-bold text-center">
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
            </MotionLayout>
            <MotionLayout>
              <div className="bg-sky-100/70 p-2 py-3 md:p-4 rounded-lg flex flex-col gap-2">
                <div className="text-two uppercase text-sm md:text-lg font-bold text-center ">
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
            </MotionLayout>
          </div>
        </div>
      </section>
    </MotionLayout>
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
    className="lucide lucide-check-check stroke-two flex-none h-[12px] w-[12px] md:h-[20px] md:w-[20px]"
  >
    <path d="M18 6 7 17l-5-5" />
    <path d="m22 10-7.5 7.5L13 16" />
  </svg>
);
