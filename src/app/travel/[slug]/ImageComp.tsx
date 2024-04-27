import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import envConfig from "../../../../config";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface ImageProps {
  Id: number;
  PlaceSpecial: string; // Hình ảnh địa danh nỗi bật
  ImageFeedback: string; // Hình ảnh KH trải nghiệm thực tế
  ImageTour: string; //Hình ảnh tour nỗi bật
}
interface ImagePropsData {
  data: ImageProps[];
}

export default function ImageComp({ data }: ImagePropsData) {
  return (
    <div>
      <Carousel
        className="w-full max-w-full group "
        opts={{
          align: "center",
          slidesToScroll: "auto",
          loop: true,
        }}
      >
        <CarouselContent>
          {data?.map((item: any, index: number) => {
            return (
              <CarouselItem
                key={index}
                className="  rounded-lg  pl-3  md:basis-1/3 basis-[85%] "
              >
                <Card className="rounded-lg shadow-sm hover:shadow-2xl duration-300 group h-full flex flex-col">
                  <Link href={`/blogs/detail/${item.Url}`}>
                    <Image
                      src={
                        envConfig.NEXT_PUBLIC_CDN +
                        item.PlaceSpecial.split(",")[0]
                      }
                      alt="nature"
                      width={1200}
                      height={800}
                      quality={100}
                      className="w-full h-[230px] md:h-[250px] object-cover  
                    group-hover:scale-103  duration-300 ease-in-out overflow-hidden rounded-lg"
                    />
                  </Link>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
