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
  const tour = tours[0];
  console.log(tour);
  let tourImages = tour.Image.split(",");
  if (tourImages[tourImages.length - 1] === "") {
    tourImages.pop();
  }

  const to = tour.Destination.replace(/;\s/g, " - ").replace(/ - $/, "");
  const from = tour.DeparturePoint.replace(/;\s/g, " / ").replace(/ \/ $/, "");
  const RenderDate = () => {
    return tour.DateStart.split(",").map((item) => {
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
    <div className="lg:container">
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
      <div className="content">
        <h2 className="text-2xl font-semibold uppercase">{tour.NameTour}</h2>
        <div className="grid md:grid-cols-2">
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
            <div>
              Trọn gói: <span>{FormatMoneyVND(tour.Price)}</span>
            </div>
            <div>
              Điển đến: <span>{to}</span>
            </div>
            <div>
              Nơi khởi hành: <span>{from}</span>
            </div>
            <div className="flex flex-row gap-2">
              Ngày khởi hành:{" "}
              <span className="flex flex-row flex-wrap gap-2">
                <RenderDate />
              </span>
            </div>
            <div>
              Trọn gói: <span>{FormatMoneyVND(tour.Price)}</span>
            </div>
            <div>
              Trọn gói: <span>{FormatMoneyVND(tour.Price)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
