import { Separator } from "@/components/ui/separator";
import React from "react";
import { Card, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import envConfig from "../../../config";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PlaceTravelSection({ data }: { data: any }) {
  let banner = data.filter((item) => item.KeySelect === "ImagePlaceFavorit");
  return (
    <section className="lg:container  mt-10 px-2 md:px-0">
      <div className="flex flex-col items-center md:gap-5  px-2 md:px-0">
        <h2 className="text-lg md:text-2xl font-bold text-main mt-8  uppercase">
          ĐIỂM DU LỊCH YÊU THÍCH
          <Separator className="mt-2 mb-2" />
        </h2>
        <p className="max-w-[800px] text-center mb-5">
          Với tiêu chí luôn mang lại những trải nghiệm thú vị độc đáo, chất
          lượng dành cho du khách. Euro Travel luôn cập nhật nhiều điểm du lịch
          mới ở các quốc gia Châu Âu, Úc, Mỹ…
        </p>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-4  gap-2 md:gap-4 px-2 md:px-0">
        {banner[0]?.BannerList.length > 0 &&
          banner[0].BannerList.map((item: any, index: any) => (
            <div className=" col-span-1" key={index}>
              <Item
                content={item.Content}
                url={item?.UrlSlide ?? ""}
                image={item.Image.split(",")[0]}
                name={item.SlideName}
              />
            </div>
          ))}
      </div>
      <div className="flex items-center justify-center">
        <Link href="/gallery">
          <Button className="bg-main text-white px-4 py-2 rounded-lg mt-4 hover:bg-main-dark transition-all duration-300 ease-in-out">
            Xem thêm
          </Button>
        </Link>
      </div>
    </section>
  );
}

const Item = ({ name, content, image, url }) => {
  return (
    <Card className="flex flex-col h-full rounded-lg shadow-sm hover:shadow-2xl duration-300 group cursor-pointer ">
      <CardHeader className="p-0 overflow-hidden rounded-xl flex-none relative">
        <Link href={url}>
          <Image
            src={envConfig.NEXT_PUBLIC_CDN + image}
            alt="nature"
            width={281}
            height={211}
            className="w-[300px] h-auto object-cover   transform
        duration-100  overflow-hidden"
          />
        </Link>
        <span className="absolute bottom-2 inset-x-0 w-full text-center font-bold text-white text-sm md:text-xl">
          {name}
        </span>
      </CardHeader>
    </Card>
  );
};
