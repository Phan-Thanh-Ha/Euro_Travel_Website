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
export default function CarouselBanner({ banner = [] }) {
  let bannerPc = banner.filter((x) => x.Types === 0);
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-1 lg:max-h-[305px] w-full">
      <div className="lg:col-span-2 col-span-1">
        <Carousel
          className="w-full max-w-full "
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {banner
              .filter((x) => x.Types === 0)
              .map((item, index) => (
                <CarouselItem
                  key={index}
                  className="max-h-[305px] lg:h-[305px] rounded-lg"
                >
                  <Image
                    src={process.env.NEXT_PUBLIC_CDN + item?.ImageShow}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="banner"
                    // alt="banner"
                    // layout="fill"
                    // objectFit="cover"
                    width={500}
                    height={305}
                    className="rounded-lg w-full object-cover h-full"
                  />
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
      <div className="lg:flex flex-col gap-1 w-full hidden">
        <Image
          src={
            process.env.NEXT_PUBLIC_CDN +
            bannerPc[bannerPc.length - 2]?.ImageShow
          }
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="banner"
          className="rounded-lg w-full"
          width={300}
          height={150}
        />
        <Image
          src={
            process.env.NEXT_PUBLIC_CDN +
            bannerPc[bannerPc.length - 1]?.ImageShow
          }
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="banner"
          className="rounded-lg w-full"
          width={300}
          height={150}
        />
      </div>
    </div>
  );
}
