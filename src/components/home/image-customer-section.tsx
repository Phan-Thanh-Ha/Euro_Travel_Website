import { Separator } from "@/components/ui/separator";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import envConfig from "../../../config";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRightIcon } from "@radix-ui/react-icons";
export default function ImageCustomerSection({ data }: { data: any }) {
  let banner = data.filter((item) => item.KeySelect === "ImageCustomerSection");
  return (
    <section className="lg:container  mt-10">
      <div className="flex flex-row items-center justify-between  px-2 md:px-0">
        <h2 className="md:text-2xl text-base font-bold text-main my-4     uppercase  flex-1">
          TRẢI NGHIỆM CỦA KHÁCH HÀNG
        </h2>
        <Link
          href="/anh-dich-vu-thuc-te"
          className="flex flex-row gap-1 items-center text-sm md:text-base underline text-main font-semibold flex-none"
        >
          Xem thêm
          <ArrowRightIcon />
        </Link>
      </div>
      <div className=" w-full">
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
                  className="  rounded-lg basis-[85%]   lg:basis-1/3 pl-3 "
                >
                  <ImageItem
                    content={item.Content}
                    url={item?.UrlSlide ?? ""}
                    image={item.Image.split(",")[0]}
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

const ImageItem = ({ content, image, url }) => {
  return (
    <Card className="flex flex-col h-full rounded-lg shadow-sm hover:shadow-2xl duration-300 group cursor-pointer ">
      <CardHeader className="p-0 overflow-hidden rounded-lg flex-none">
        <Link href={url}>
          <Image
            src={envConfig.NEXT_PUBLIC_CDN + image}
            alt="nature"
            width={500}
            height={400}
            className="w-full h-auto object-cover  
       duration-300 ease-in-out overflow-hidden"
          />
        </Link>
      </CardHeader>
    </Card>
  );
};
