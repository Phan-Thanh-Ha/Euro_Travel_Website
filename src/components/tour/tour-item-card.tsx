import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import DiaLogRegisterTour from "@/components/tour/dialog-register-tour";
import envConfig from "../../../config";
import Link from "next/link";
import { FormatMoneyVND } from "@/utils/FormatMoneyVND";
import { cn } from "@/lib/utils";
type TourItemProps = {
  Destination: string;
  DeparturePoint: string;
  DateStart: string;
  Flight: string;
  Image: string;
  NameTour: string;
  Timeline: string;
  Slug: string;
  Price: number;
};

export default function TourItem({
  data,
  className,
}: {
  data: TourItemProps;
  className?: string;
}) {
  const to = data.Destination.replace(/;\s/g, " - ").replace(/ - $/, "");
  const from = data.DeparturePoint.replace(/;\s/g, " / ").replace(/ \/ $/, "");
  const RenderDate = () => {
    return data.DateStart.split(",").map((item) => {
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
    <Card className="rounded-lg shadow-sm hover:shadow-2xl duration-300 group h-full flex flex-col">
      <Link href={"/tour" + data?.Slug ?? ""}>
        <CardHeader className="p-0 overflow-hidden rounded-t-lg cursor-pointer ">
          <Image
            src={envConfig.NEXT_PUBLIC_CDN + data.Image.split(",")[0]}
            alt="nature"
            width={1200}
            height={800}
            quality={100}
            className="w-auto h-[235px] md:h-[250px] object-cover  
           group-hover:scale-105  duration-300 ease-in-out overflow-hidden"
          />
        </CardHeader>
      </Link>

      <CardContent className=" p-2 py-4 md:p-4  relative flex-grow">
        <span
          className="absolute -top-3 left-4 rounded-sm bg-main px-2 py-1 text-xs 
         font-medium text-white z-10"
        >
          {data.Timeline}
        </span>
        <div className="flex flex-col gap-1 h-full">
          <CardTitle className="flex-none text-main uppercase leading-4 mb-3 font-bold text-base cursor-pointer">
            <Link href={"/tour" + data?.Slug ?? ""}>{data.NameTour}</Link>
          </CardTitle>
          <div className="flex flex-col gap-1.5 flex-1   ">
            <div
              className={cn(
                "flex items-start gap-1 text-sm md:text-base",
                className
              )}
            >
              <span className="flex items-center flex-row  gap-1 min-w-fit font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-map-pin"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx={12} cy={10} r={3} />
                </svg>{" "}
                Điểm đến:{" "}
              </span>
              <span>{to}</span>
            </div>
            <div
              className={cn(
                "flex items-start gap-1 text-sm md:text-base",
                className
              )}
            >
              <span className="font-bold items-center flex flex-row gap-1 flex-none">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-map-pinned"
                >
                  <path d="M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0" />
                  <circle cx={12} cy={8} r={2} />
                  <path d="M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835" />
                </svg>{" "}
                Nơi khởi hành:{" "}
              </span>
              <span>{from}</span>
            </div>
            <div
              className={cn(
                "flex items-start gap-1 text-sm md:text-base",
                className
              )}
            >
              <span className=" flex items-center gap-1 font-bold">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                </svg>{" "}
                Phương tiện:{" "}
              </span>
              <span>{data.Flight}</span>
            </div>
            <div className=" flex flex-row flex-wrap gap-1 text-sm md:text-base my-1">
              <span className=" flex flex-row gap-1 flex-none font-bold">
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
                  className="lucide lucide-clock md:hidden"
                >
                  <circle cx={12} cy={12} r={10} />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Ngày khởi hành:{" "}
              </span>
              <RenderDate />
            </div>
            <div className="my-2 flex-1 flex items-end">
              <span className="text-sm md:text-base font-semibold mr-3 mb-1">
                Trọn gói:
              </span>
              <span className="text-main text-xl md:text-2xl font-bold">
                {" "}
                {FormatMoneyVND(data.Price)}
              </span>
            </div>
          </div>
          <div className="flex justify-between  gap-4 flex-none">
            <DiaLogRegisterTour tourName={data.NameTour} />
            <Button
              variant="outline"
              size={"lg"}
              className="w-full px-4   font-bold text-base"
            >
              <Link href={"/tour" + data?.Slug ?? ""}> Xem chi tiết</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
