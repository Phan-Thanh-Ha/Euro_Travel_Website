import { dataTravelBlogsHeader, dataTravelBlogsPage } from "@/app/blogs/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface DataTravelBlogPostNewProps {
  BlogsId: number;
  Title: string;
  Description: string;
  Content: string;
  Image: string;
  Link: string;
  CountView: number;
  Url: string;
  CreateOn: string;
  CreateBy: string;
  CategoryId: number;
  CategoryName: string;
}
interface TravelBlogPostNewProps {
  data: DataTravelBlogPostNewProps[];
}
export function TravelBlogPostNew({ data }: TravelBlogPostNewProps) {
  /* Kinh nghiệm du lịch */
  const data1 = dataTravelBlogsPage.filter((item) => item.CategoryId === 61);
  /* Văn hóa ẩm thực */
  const data2 = dataTravelBlogsPage.filter((item) => item.CategoryId === 62);
  /* Địa điểm du lich */
  const data3 = dataTravelBlogsPage.filter((item) => item.CategoryId === 63);

  return (
    <div>
      {/* 1 */}
      <div>
        <h2 className="text-2xl text-main font-bold my-5">
          {data1[0].CategoryName}
        </h2>
        <Carousel
          className="w-full max-w-full group "
          opts={{
            align: "center",
            slidesToScroll: "auto",
            loop: true,
          }}
        >
          <CarouselContent>
            {data1?.map((item: any, index: number) => {
              return (
                <CarouselItem
                  key={index}
                  className="  rounded-lg  pl-3  md:basis-1/3 basis-[85%] "
                >
                  <Card className="rounded-lg duration-300 group h-full flex flex-col border-0 border-b-4 border-gray-200 hover:border-red-500">
                    <Image
                      src={item.Image}
                      alt="nature"
                      width={1200}
                      height={800}
                      quality={100}
                      className="w-auto h-[230px] md:h-[250px] object-cover  
                    group-hover:scale-103  duration-300 ease-in-out overflow-hidden rounded-lg"
                    />

                    <CardContent className=" p-2 py-4 md:p-4  relative flex-grow">
                      <div className="flex flex-col gap-1 h-full">
                        <div className="flex justify-between">
                          <CardTitle className="flex-none text-black font-normal uppercase leading-4 mb-3 text-base cursor-pointer w-1/2">
                            <Link href={"/tour" + item?.Slug ?? ""}>
                              {item.CreateTime}
                            </Link>
                          </CardTitle>
                          <CardTitle className="flex-none text-black font-normal uppercase leading-4 mb-3 text-base cursor-pointer w-1/2">
                            <Link href={"/tour" + item?.Slug ?? ""}>
                              {item.CreateName}
                            </Link>
                          </CardTitle>
                        </div>
                        <CardTitle className="flex-none text-main uppercase leading-4 mb-3 font-bold text-base cursor-pointer">
                          <Link href={"/tour" + item?.Slug ?? ""}>
                            {item.Title}
                          </Link>
                        </CardTitle>
                        <CardTitle className="w-full font-light">
                          {item.Content.length > 70
                            ? item.Content.slice(0, 70) + "..."
                            : item.Content}
                        </CardTitle>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-main/50 text-white hidden  disabled:hidden md:group-hover:flex" />
          <CarouselNext className="right-4  bg-main/50  text-white  hidden  disabled:hidden md:group-hover:flex" />
        </Carousel>
      </div>
      {/* 2 */}
      <div>
        <h2 className="text-2xl text-main font-bold my-5">
          {data2[0].CategoryName}
        </h2>
        <Carousel
          className="w-full max-w-full group "
          opts={{
            align: "center",
            slidesToScroll: "auto",
            loop: true,
          }}
        >
          <CarouselContent>
            {data2?.map((item: any, index: number) => {
              return (
                <CarouselItem
                  key={index}
                  className="  rounded-lg  pl-3  md:basis-1/3 basis-[85%] "
                >
                  <Card className="rounded-lg duration-300 group h-full flex flex-col border-0 border-b-4 border-gray-200 hover:border-red-500">
                    <Image
                      src={item.Image}
                      alt="nature"
                      width={1200}
                      height={800}
                      quality={100}
                      className="w-auto h-[230px] md:h-[250px] object-cover  
                    group-hover:scale-103  duration-300 ease-in-out overflow-hidden rounded-lg"
                    />

                    <CardContent className=" p-2 py-4 md:p-4  relative flex-grow">
                      <div className="flex flex-col gap-1 h-full">
                        <div className="flex justify-between">
                          <CardTitle className="flex-none text-black font-normal uppercase leading-4 mb-3 text-base cursor-pointer w-1/2">
                            <Link href={"/tour" + item?.Slug ?? ""}>
                              {item.CreateTime}
                            </Link>
                          </CardTitle>
                          <CardTitle className="flex-none text-black font-normal uppercase leading-4 mb-3 text-base cursor-pointer w-1/2">
                            <Link href={"/tour" + item?.Slug ?? ""}>
                              {item.CreateName}
                            </Link>
                          </CardTitle>
                        </div>
                        <CardTitle className="flex-none text-main uppercase leading-4 mb-3 font-bold text-base cursor-pointer">
                          <Link href={"/tour" + item?.Slug ?? ""}>
                            {item.Title}
                          </Link>
                        </CardTitle>
                        <CardTitle className="w-full font-light">
                          {item.Content.length > 70
                            ? item.Content.slice(0, 70) + "..."
                            : item.Content}
                        </CardTitle>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-main/50 text-white hidden  disabled:hidden md:group-hover:flex" />
          <CarouselNext className="right-4  bg-main/50  text-white  hidden  disabled:hidden md:group-hover:flex" />
        </Carousel>
      </div>
      {/* 3 */}
      <div>
        <h2 className="text-2xl text-main font-bold my-5">
          {data3[0].CategoryName}
        </h2>
        <Carousel
          className="w-full max-w-full group "
          opts={{
            align: "center",
            slidesToScroll: "auto",
            loop: true,
          }}
        >
          <CarouselContent>
            {data3?.map((item: any, index: number) => {
              return (
                <CarouselItem
                  key={index}
                  className="  rounded-lg  pl-3  md:basis-1/3 basis-[85%] "
                >
                  <Card className="rounded-lg duration-300 group h-full flex flex-col border-0 border-b-4 border-gray-200 hover:border-red-500">
                    <Image
                      src={item.Image}
                      alt="nature"
                      width={1200}
                      height={800}
                      quality={100}
                      className="w-auto h-[230px] md:h-[250px] object-cover  
                    group-hover:scale-103  duration-300 ease-in-out overflow-hidden rounded-lg"
                    />

                    <CardContent className=" p-2 py-4 md:p-4  relative flex-grow">
                      <div className="flex flex-col gap-1 h-full">
                        <div className="flex justify-between">
                          <CardTitle className="flex-none text-black font-normal uppercase leading-4 mb-3 text-base cursor-pointer w-1/2">
                            <Link href={"/tour" + item?.Slug ?? ""}>
                              {item.CreateTime}
                            </Link>
                          </CardTitle>
                          <CardTitle className="flex-none text-black font-normal uppercase leading-4 mb-3 text-base cursor-pointer w-1/2">
                            <Link href={"/tour" + item?.Slug ?? ""}>
                              {item.CreateName}
                            </Link>
                          </CardTitle>
                        </div>
                        <CardTitle className="flex-none text-main uppercase leading-4 mb-3 font-bold text-base cursor-pointer">
                          <Link href={"/tour" + item?.Slug ?? ""}>
                            {item.Title}
                          </Link>
                        </CardTitle>
                        <CardTitle className="w-full font-light">
                          {item.Content.length > 70
                            ? item.Content.slice(0, 70) + "..."
                            : item.Content}
                        </CardTitle>
                      </div>
                    </CardContent>
                  </Card>
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
