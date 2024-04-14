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
import Link from "next/link";

export default function CarouselBanner({ banner = [] }: { banner: any[] }) {
  let bannerMain = banner.filter((item) => item.KeySelect === "BannerMain");
  let bannerTopRight = banner.filter(
    (item) => item.KeySelect === "BannerTopRight"
  );
  let bannerBottomRight = banner.filter(
    (item) => item.KeySelect === "BannerBottomRight"
  );
  return (
    <div className="grid lg:grid-cols-12 grid-cols-1 gap-1 lg:max-h-[350px] w-full">
      <div className="lg:col-span-7 col-span-1">
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
            {bannerMain[0]?.BannerList?.map((item, index) => (
              <CarouselItem
                key={index}
                className="max-h-[350px] h-[150px] lg:h-[344px] rounded-lg"
              >
                <Link href={item?.UrlSlide || ""}>
                  <Image
                    src={
                      process.env.NEXT_PUBLIC_CDN +
                        item?.Image?.split(",")[0] || ""
                    }
                    // sizes="(max-width: full) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="banner"
                    // alt="banner"
                    // layout="fill"
                    // objectFit="cover"
                    width={1110}
                    height={350}
                    className="w-full object-cover h-full"
                  />
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 border-none bg-main/50 text-white hidden  disabled:hidden md:flex" />
          <CarouselNext className="right-4  border-none bg-main/50  text-white  hidden  disabled:hidden md:flex" />
        </Carousel>
      </div>
      <div className="lg:flex flex-col col-span-5 gap-1 w-full hidden">
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
            {bannerTopRight[0]?.BannerList?.map((item, index) => (
              <CarouselItem
                key={index}
                className="max-h-[170px] lg:h-[170px] rounded-lg"
              >
                <Image
                  src={
                    process.env.NEXT_PUBLIC_CDN + item?.Image?.split(",")[0] ||
                    ""
                  }
                  // sizes="(max-width: full) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="banner"
                  // alt="banner"
                  // layout="fill"
                  // objectFit="cover"
                  width={790}
                  height={175}
                  className="w-full object-cover h-full"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
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
            {bannerBottomRight[0]?.BannerList?.map((item, index) => (
              <CarouselItem
                key={index}
                className="max-h-[170px] lg:h-[170px] rounded-lg"
              >
                <Image
                  src={
                    process.env.NEXT_PUBLIC_CDN + item?.Image?.split(",")[0] ||
                    ""
                  }
                  // sizes="(max-width: full) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="banner"
                  // alt="banner"
                  // layout="fill"
                  // objectFit="cover"
                  width={790}
                  height={175}
                  className="w-full object-cover h-full"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </div>
  );
}
