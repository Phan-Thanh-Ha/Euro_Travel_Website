import { fetchTourGroups } from "@/actions/tour";
import TourItem from "@/components/tour/tour-item-card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import MotionLayout from "@/components/motion-layout";
export default async function GroupTour() {
  const toursGroup = await fetchTourGroups({
    Id: 0,
    Slug: "",
  });

  const RenderContentPc: React.FC<any> = ({ item }) => {
    return item.Tours.map((tour: any, index2: any) => {
      return (
        <CarouselItem
          key={index2}
          className=" md:block hidden rounded-lg  pl-3 lg:basis-1/4 basis-[85%] "
        >
          <TourItem key={index2} data={tour} />
        </CarouselItem>
      );
    });
  };

  const RenderContentMobile: React.FC<any> = ({ item }) => {
    let newArrTour = Array(Math.ceil(item.Tours.length / 2))
      .fill([])
      .map((chunk, index) => {
        return item.Tours.slice(index * 2, (index + 1) * 2);
      });
    return newArrTour.map((tour: any, index2: any) => {
      return (
        <CarouselItem key={index2} className="  rounded-lg  md:hidden">
          <div className="grid col-2">
            {tour.map((t: any, i: any) => {
              return <TourItem key={i} data={t} />;
            })}
          </div>
        </CarouselItem>
      );
    });
  };

  return toursGroup.map((item: any, index: any) => {
    return (
      <MotionLayout key={index}>
        <div
          className={` relative mt-10 bg-cover bg-center bg-no-repeat bg-transparent transition-[display] duration-500`}
          // style={{ backgroundImage: `url("/images/bg2.png")` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white from-20% via-transparent via-60% to-white  -z-20"></div>
          <div className="absolute -z-30 inset-0 ">
            <Image
              src={"/images/bg2.png"}
              fill
              className="w-full h-full object-cover"
              alt="bg"
            />
          </div>
          <div className="lg:container">
            <div className="flex flex-col items-center">
              <h2 className=" text-xl md:text-2xl font-bold text-main my-5  uppercase">
                {item.NameVn}
                <Separator className="mb-2" />
              </h2>
            </div>
            <div className="grid grid-cols-2 md:hidden gap-2 mx-2">
              {item.Tours.map((tour: any, index2: any) => {
                return <TourItem key={index2} data={tour} />;
              })}
            </div>
            <Carousel
              className="w-full max-w-full group hidden md:block"
              opts={{
                align: "center",
                slidesToScroll: "auto",
                loop: true,
              }}
            >
              <CarouselContent>
                <>
                  <RenderContentPc item={item} />
                  <RenderContentMobile item={item} />
                </>
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-main/50 text-white hidden  disabled:hidden md:group-hover:flex" />
              <CarouselNext className="right-4  bg-main/50  text-white  hidden  disabled:hidden md:group-hover:flex" />
            </Carousel>
          </div>
        </div>
      </MotionLayout>
    );
  });
}
