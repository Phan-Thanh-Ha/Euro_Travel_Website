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
import envConfig from "../../../config";
import ProductItem from "@/components/product/product-item";
export default function CarouselGroupProductItem({ group }: { group: any }) {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col">
        {/* <div className="flex justify-between items-center py-2">
          <h2 className="text-2xl font-bold">{group.Name}</h2>
          <a href="#" className="text-main text-sm">
            Xem tất cả
          </a>
        </div> */}
        <div className="justify-between py-2">
          <h2 className="text-2xl font-bold text-main text-center">{group.Name}
            <img src="/images/divider.png" alt="Divider" className="h-2 mx-auto my-3" />
          </h2>
        </div>
        <div className="flex justify-between">
          <Carousel
            className="w-full max-w-full "
            // plugins={[
            //   Autoplay({
            //     delay: 5000,
            //   }),
            // ]}
            opts={{
              align: "start",
              slidesToScroll: "auto",
            }}
          >
            <CarouselContent>
              {group.Product.map((item: any, index: number) => {
                return (
                  <CarouselItem
                    key={index}
                    className="rounded-lg md:basis-1/4"
                  >
                    <ProductItem product={item} />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="-left-4 hidden md:flex disabled:hidden" />
            <CarouselNext className="-right-4  hidden md:flex disabled:hidden" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
