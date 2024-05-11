"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { Separator } from "@/components/ui/separator";

export default function PartnerSection({ data }: { data: any }) {
  let res = data.filter((item) => item.KeySelect === "Partner");
  return (
    <div className="flex flex-col gap-12 lg:my-10 my-4 px-2 md:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-lg md:text-2xl font-bold text-main mt-5 mb-0 md:mt-8  uppercase">
            Đối tác của EuroTravel
            <Separator className="my-3" />
          </h2>
          <div className="flex justify-between">
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
                {res[0].BannerList.map((item: any, index: number) => {
                  return (
                    <CarouselItem
                      key={index}
                      className="rounded-lg basis-1/2 md:basis-1/4"
                    >
                      <Link
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        href={item?.UrlSlide}
                        title={item?.SlideName}
                        className="relative"
                      >
                        <Image
                          src={
                            process.env.NEXT_PUBLIC_CDN +
                            item?.Image.split(",")[0]
                          }
                          alt={item?.SlideName}
                          width={500}
                          height={500}
                          style={{ width: "auto", height: "100%" }}
                          className="rounded-lg object-cover w-auto h-full"
                        />
                        <span className="absolute bg-gradient-to-t rounded-lg from-black/20 to-black/0 inset-x-0 bottom-2 h-12"></span>
                      </Link>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="-left-4 text-white bg-main/50 hidden md:flex disabled:hidden" />
              <CarouselNext className="-right-4 text-white bg-main/50  hidden md:flex disabled:hidden" />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
