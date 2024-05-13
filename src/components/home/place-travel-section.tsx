import { Separator } from "@/components/ui/separator";
import React from "react";
import { Card, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import envConfig from "../../../config";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export default function PlaceTravelSection({ data }: { data: any }) {
  let banner = data.filter((item) => item.KeySelect === "ImagePlaceFavorit");
  return (
    <section className="lg:container  mt-10 px-2 md:px-0">
      <div className="flex flex-row items-center justify-between  px-2 md:px-0">
        <h2 className="md:text-2xl text-base font-bold text-main my-4 md:mb-4 md:mt-8  uppercase  flex-1">
          ĐIỂM DU LỊCH YÊU THÍCH
        </h2>
        <Link
          href="/search"
          className="flex flex-row gap-1 items-center text-sm md:text-base underline text-main font-semibold flex-none"
        >
          Xem thêm
          <ArrowRightIcon />
        </Link>
      </div>

      <div className=" w-full px-2 md:px-0">
        <Carousel
          className="w-full max-w-full group "
          opts={{
            align: "center",
            slidesToScroll: "auto",
            loop: true,
          }}
        >
          <CarouselContent>
            {banner[0]?.BannerList.length > 0 &&
              banner[0].BannerList.map((item: any, index: any) => (
                <CarouselItem
                  key={index}
                  className="  rounded-lg  pl-3  lg:basis-1/3 basis-[85%] "
                >
                  <Item
                    content={item.Content}
                    url={item?.UrlSlide ?? ""}
                    image={item.Image.split(",")[0]}
                    name={item.SlideName}
                  />
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-main/50 text-white hidden  disabled:hidden md:group-hover:flex" />
          <CarouselNext className="right-4  bg-main/50  text-white  hidden  disabled:hidden md:group-hover:flex" />
        </Carousel>
      </div>
    </section>
  );
}

const Item = ({ name, content, image, url }) => {
  return (
    <Card className="flex flex-col h-full rounded-lg shadow-sm hover:shadow-2xl duration-300 group cursor-pointer ">
      <CardHeader className="p-0 overflow-hidden rounded-xl flex-none relative">
        <Link href={url}>
          <Image
            src={envConfig.NEXT_PUBLIC_CDN + image}
            alt="nature"
            width={300}
            height={500}
            quality={100}
            className="w-full h-[500px] object-cover   transform
        duration-100  overflow-hidden"
          />
        </Link>
        <span className="absolute bottom-2 inset-x-0 w-full text-center font-bold text-white text-sm md:text-xl">
          {name}
        </span>
      </CardHeader>
    </Card>
  );
};
