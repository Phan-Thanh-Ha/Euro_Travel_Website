import React from "react";
import { SlashIcon } from "@radix-ui/react-icons";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { fetchTour } from "@/actions/tour";
import Image from "next/image";
import envConfig from "../../../../config";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FormatMoneyVND } from "@/utils/FormatMoneyVND";
import ScheduleTour from "@/app/tour/[slug]/schedule";
import ImageReviewList from "@/app/tour/[slug]/image-review-list";
import Price from "@/app/tour/[slug]/price";
import Intro from "@/app/tour/[slug]/intro";
import Policy from "@/app/tour/[slug]/policy";

type Tour = {
  Id: number;
  NameTour: string;
  Slug: string;
  Price: number;
  Image: string;
  DateStart: string;
  Destination: string;
  DeparturePoint: string;
  Timeline: string;
  Notes: string;
  Description: string;
  Schedule: string;
  RulesTour: string;
  TourImageReview: string;
};

export default async function TourDetail({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const tours = await fetchTour({
    Id: 0,
    Slug: "/" + slug,
  });
  const tour: Tour = tours[0];
  let tourImages = tour?.Image?.split(",") || [];
  if (tourImages[tourImages.length - 1] === "") {
    tourImages.pop();
  }
  const to =
    tour?.Destination?.replace(/;\s/g, " - ").replace(/ - $/, "") || "";
  const from =
    tour?.DeparturePoint?.replace(/;\s/g, " / ").replace(/ \/ $/, "") || "";
  const RenderDate = () => {
    return tour?.DateStart.split(",").map((item) => {
      return (
        <span
          key={item}
          className="text-xs font-semibold bg-sky-100 rounded-full px-2 py-1 text-blue-default text-center"
        >
          {item}
        </span>
      );
    });
  };

  return (
    <div className="lg:container relative tour-detail-section ">
      <div className="my-2 mx-2 md:mx-0">
        {" "}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <SlashIcon />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Du lịch A</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <SlashIcon />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="content card-new p-2 md:p-4 py-6 ">
        <h2 className="text-xl md:text-2xl font-semibold uppercase mb-6">
          {tour?.NameTour}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Carousel
              className="w-full h-full"
              opts={{
                align: "start",
                slidesToScroll: "auto",
              }}
            >
              <CarouselContent className="ml-0">
                {tourImages.map((item: any, index: number) => {
                  return (
                    <CarouselItem key={index} className=" rounded-lg p-1">
                      <Image
                        width={750}
                        height={563}
                        alt="product"
                        src={envConfig.NEXT_PUBLIC_CDN + item}
                        className=" object-cover h-full w-auto rounded-lg  "
                      />
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="left-4 hidden text-white bg-main/70 border-none md:flex disabled:hidden" />
              <CarouselNext className="right-4 hidden text-white bg-main/70 border-none md:flex disabled:hidden" />
            </Carousel>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-4 flex-none">
              <div className=" flex flex-row  gap-2 ">
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
                  className="lucide lucide-land-plot stroke-main"
                >
                  <path d="m12 8 6-3-6-3v10" />
                  <path d="m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12" />
                  <path d="m6.49 12.85 11.02 6.3" />
                  <path d="M17.51 12.85 6.5 19.15" />
                </svg>
                <span className="font-bold"> Điểm đến:</span> <span>{to}</span>
              </div>
              <div className=" flex flex-row  gap-2 ">
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
                  className="lucide lucide-map-pinned  stroke-main"
                >
                  <path d="M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0" />
                  <circle cx={12} cy={8} r={2} />
                  <path d="M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835" />
                </svg>
                <span className="font-bold"> Nơi khởi hành:</span>{" "}
                <span>{from}</span>
              </div>
              <div className="flex flex-row gap-2">
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
                  className="lucide lucide-calendar-days stroke-main"
                >
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <rect width={18} height={18} x={3} y={4} rx={2} />
                  <path d="M3 10h18" />
                  <path d="M8 14h.01" />
                  <path d="M12 14h.01" />
                  <path d="M16 14h.01" />
                  <path d="M8 18h.01" />
                  <path d="M12 18h.01" />
                  <path d="M16 18h.01" />
                </svg>

                <span className="font-bold"> Ngày khởi hành: </span>
                <span className="flex flex-row flex-wrap gap-2">
                  <RenderDate />
                </span>
              </div>
              <div className="flex flex-row gap-2">
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
                  className="lucide lucide-clock stroke-main"
                >
                  <circle cx={12} cy={12} r={10} />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="font-bold"> Thời gian:</span>{" "}
                <span>{tour?.Timeline}</span>
              </div>
              <div className="p-4 bg-sky-100 rounded-lg ">
                <span className="">{tour?.Notes}</span>
              </div>
            </div>
            <div className=" flex-1 flex items-end">
              <div className="grid grid-cols-2 justify-end gap-4 w-full">
                <div className="col-span-2 my-4">
                  <span className="font-bold text-base">Trọn gói:</span>{" "}
                  <span className="text-3xl md:text-4xl text-main font-bold">
                    {FormatMoneyVND(tour?.Price)}
                  </span>
                </div>
                <button className="bg-main text-white text-xl py-4 rounded-lg col-span-2 md:col-span-1">
                  Đặt ngay
                </button>
                <button className="bg-blue-default text-white text-xl py-4 rounded-lg col-span-2  md:col-span-1">
                  Chat với nhân viên
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="infor-section mt-10 relative leading-9 flex flex-col gap-10 md:gap-16 px-2">
        {tour?.Description && <Intro data={tour} />}
        <div>
          <h2 className="text-xl md:text-2xl font-bold  text-main mb-4 flex items-center gap-2">
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
              className="lucide lucide-calendar-days"
            >
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <rect width={18} height={18} x={3} y={4} rx={2} />
              <path d="M3 10h18" />
              <path d="M8 14h.01" />
              <path d="M12 14h.01" />
              <path d="M16 14h.01" />
              <path d="M8 18h.01" />
              <path d="M12 18h.01" />
              <path d="M16 18h.01" />
            </svg>
            Lịch trình
          </h2>
          <ScheduleTour schedule={tour?.Schedule} />
        </div>
        <div>
          <Price data={tour} />
        </div>
        {tour?.RulesTour && <Policy tour={tour} />}
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-main flex items-center gap-2 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={26}
              height={26}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-images"
            >
              <path d="M18 22H4a2 2 0 0 1-2-2V6" />
              <path d="m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18" />
              <circle cx={12} cy={8} r={2} />
              <rect width={16} height={16} x={6} y={2} rx={2} />
            </svg>
            Hình ảnh thực tế
          </h2>
          <ImageReviewList images={tour?.TourImageReview || ""} />
        </div>
      </div>
    </div>
  );
}
