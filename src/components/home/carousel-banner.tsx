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
import SearchComponent from "@/components/search/search";

export default function CarouselBanner({ banner = [] }: { banner: any[] }) {
  let bannerMain = banner.filter((item) => item.KeySelect === "BannerMain");
  let bannerTopRight = banner.filter(
    (item) => item.KeySelect === "BannerTopRight"
  );
  let bannerBottomRight = banner.filter(
    (item) => item.KeySelect === "BannerBottomRight"
  );
  return (
    <div className=" w-full relative z-[11]">
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
            <CarouselItem key={index} className="p-0">
              <Link href={item?.UrlSlide || ""}>
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
                  width={1903}
                  height={860}
                  quality={100}
                  className="w-full object-cover h-[250px] md:h-[580px]"
                />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 border-none bg-transparent text-white/90 hidden  disabled:hidden md:flex" />
        <CarouselNext className="right-4  border-none bg-transparent text-white/90  hidden  disabled:hidden md:flex" />
      </Carousel>
      {/* <div className="lg:flex flex-col col-span-5 gap-1 w-full hidden">
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
      </div> */}
      <div className="md:absolute md:-bottom-[220px] px-2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 w-full">
        <SearchComponent />
      </div>
    </div>
  );
}
