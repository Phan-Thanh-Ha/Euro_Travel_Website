import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import envConfig from "../../../config";
import StarRating from "@/components/star-ratirng";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export default function FeedbackCustomer({ data }: { data: any }) {
  const banners = data.filter(
    (item) => item.KeySelect === "FeedbackCustomer"
  )[0]?.BannerList;

  return (
    <div className="lg:container  mt-10">
      <div className="flex flex-col items-center">
        <h2 className="text-lg md:text-2xl font-bold text-main my-8 text-center uppercase">
          Lắng nghe khách hàng nói gì về EUROTRAVEL
          <Separator />
        </h2>
      </div>
      <div className="flex justify-between relative">
        <Carousel
          className="w-full max-w-full group "
          opts={{
            align: "center",
            slidesToScroll: "auto",
            loop: true,
          }}
        >
          <CarouselContent>
            {banners?.map((item: any, index: number) => {
              return (
                <CarouselItem
                  key={index}
                  className="  rounded-lg  pl-3  lg:basis-1/3 basis-[85%] pb-5"
                >
                  <FeedbackItem
                    content={item.Content}
                    image={item.Image.split(",")[0]}
                    url={item?.UrlSlide ?? ""}
                    title={item.SlideName}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-main/50 text-white hidden  disabled:hidden md:group-hover:flex" />
          <CarouselNext className="right-4  bg-main/50  text-white  hidden  disabled:hidden md:group-hover:flex" />
        </Carousel>
      </div>
    </div>
  );
}

const FeedbackItem = ({ content, image, url, title }) => {
  return (
    <Card
      className="flex flex-col h-full rounded-lg shadow-none 
     duration-300 group cursor-pointer border-none bg-white/80"
    >
      <CardHeader className="p-0 overflow-hidden rounded-t-lg flex-none flex items-center justify-center">
        <Link href={url} className="py-4">
          <Avatar className="h-36 w-36 border-main ring-2 ring-main">
            <AvatarImage src={envConfig.NEXT_PUBLIC_CDN + image} />
            <AvatarFallback>Avatar</AvatarFallback>
          </Avatar>
        </Link>
      </CardHeader>
      <CardContent className=" flex-1 p-4 pt-0 grid grid-col gap-4 items-start">
        <div className="flex w-full items-center justify-center h-fit">
          <StarRating rating={5} />
        </div>
        <CardDescription className="text-slate-900  leading-4 mb-3 font-medium text-base text-center">
          {content}
        </CardDescription>
        <CardTitle className="text-main  leading-4 mb-3 font-bold text-base text-center">
          {title}
        </CardTitle>
      </CardContent>
    </Card>
  );
};
