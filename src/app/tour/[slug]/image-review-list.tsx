"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
export default function ImageReviewList({ images }: { images: any }) {
  let res = images.split(",").filter((item: any) => item);
  return (
    <Carousel
      className="w-full max-w-full "
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      opts={{
        align: "start",
        slidesToScroll: "auto",
        loop: true,
      }}
    >
      <CarouselContent>
        {res.map((item: any, index: number) => {
          return (
            <CarouselItem
              key={index}
              className="rounded-lg basis-1/2 md:basis-1/4"
            >
              <Image
                src={process.env.NEXT_PUBLIC_CDN + item}
                alt={"Khách hàng"}
                width={750}
                height={563}
                style={{ width: "auto", height: "100%" }}
                className="rounded-lg object-cover w-auto h-full"
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="-left-4 text-white bg-main/50 hidden md:flex disabled:hidden" />
      <CarouselNext className="-right-4 text-white bg-main/50  hidden md:flex disabled:hidden" />
    </Carousel>
  );
}
