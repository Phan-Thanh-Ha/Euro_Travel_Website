import { Separator } from "@/components/ui/separator";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import StarRating from "@/components/star-ratirng";
import { fetchBanner } from "@/actions/setting";
import envConfig from "../../../config";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ImageCustomerSection({ data }: { data: any }) {
  let banner = data.filter((item) => item.KeySelect === "ImageCustomerSection");
  return (
    <section className="lg:container  mt-10">
      <div className="flex flex-col items-center">
        <h2 className="md:text-2xl font-bold text-main my-8  uppercase text-center">
          HÌNH ẢNH THỰC TẾ KHÁCH HÀNG TRẢI NGHIỆM DỊCH VỤ CỦA EUROTRAVEL
          <Separator />
        </h2>
      </div>
      <div className=" grid grid-cols-2  md:grid-cols-4 gap-2 md:gap-4 px-2 md:px-0">
        {banner[0]?.BannerList.length > 0 &&
          banner[0].BannerList.map((item: any, index: any) => (
            <div className="col-span-1 md:col-span-1" key={index}>
              <ImageItem
                content={item.Content}
                url={item?.UrlSlide ?? ""}
                image={item.Image.split(",")[0]}
              />
            </div>
          ))}
      </div>
      <div className="flex items-center justify-center">
        <Link href="/gallery">
          <Button className="bg-main uppercase font-bold hover:shadow-2xl text-white px-4 py-2 rounded-lg mt-4 hover:bg-main-dark transition-all duration-300 ease-in-out">
            Xem thêm
          </Button>
        </Link>
      </div>
    </section>
  );
}

const ImageItem = ({ content, image, url }) => {
  return (
    <Card className="flex flex-col h-full rounded-lg shadow-sm hover:shadow-2xl duration-300 group cursor-pointer ">
      <CardHeader className="p-0 overflow-hidden rounded-lg flex-none">
        <Link href={url}>
          <Image
            src={envConfig.NEXT_PUBLIC_CDN + image}
            alt="nature"
            width={300}
            height={200}
            className="w-[300px] h-auto object-cover  
       group-hover:scale-105  duration-300 ease-in-out overflow-hidden"
          />
        </Link>
      </CardHeader>
    </Card>
  );
};
