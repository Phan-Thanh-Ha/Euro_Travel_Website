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

export default function NewspaperAboutUsSection({ data }: { data: any }) {
  let banner = data.filter((item) => item.KeySelect === "NewspaperAboutUs");
  //   console.log(banner[0].BannerList);
  return (
    <section className="lg:container  mt-10">
      <div className="flex flex-col items-center">
        <h2 className="text-lg md:text-2xl font-bold text-main my-8  uppercase">
          Báo chí nói gì về EUROTRAVEL
          <Separator />
        </h2>
      </div>
      <div className=" grid md:grid-cols-4 gap-2 md:gap-4 px-2 md:px-0">
        <div className="col-span-4 md:col-span-2">
          <iframe
            src="https://www.youtube.com/embed/opEOCtHE5g8?feature=oembed"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-52 md:h-96 rounded-lg"
          />
        </div>
        <div className="col-span-4 md:col-span-2">
          <iframe
            src="https://www.youtube.com/embed/JSyLyBKsEqE?feature=oembed"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-52 md:h-96 rounded-lg"
          />
        </div>
        {banner[0]?.BannerList.length > 0 &&
          banner[0].BannerList.map((item: any, index: any) => (
            <div className="col-span-2 md:col-span-1" key={index}>
              <NewspaperItem
                content={item.Content}
                url={item?.UrlSlide ?? ""}
                image={item.Image.split(",")[0]}
              />
            </div>
          ))}
      </div>
    </section>
  );
}

const NewspaperItem = ({ content, image, url }) => {
  return (
    <Card className="flex flex-col h-full rounded-lg shadow-sm hover:shadow-2xl duration-300 group cursor-pointer ">
      <CardHeader className="p-0 overflow-hidden rounded-t-lg flex-none">
        <Link href={url}>
          <Image
            src={envConfig.NEXT_PUBLIC_CDN + image}
            alt="nature"
            width={300}
            height={200}
            className="w-auto h-[120px] md:h-[200px] object-cover  
       group-hover:scale-105  duration-300 ease-in-out overflow-hidden"
          />
        </Link>
      </CardHeader>
      <CardContent className=" flex-1 p-2 md:p-4 grid grid-col gap-4 items-start">
        <div className="flex w-full items-center justify-center h-fit">
          <StarRating rating={5} />
        </div>
        <CardTitle className="text-main uppercase leading-4 mb-3 font-bold text-base text-center">
          <Link href={url}>{content}</Link>
        </CardTitle>
      </CardContent>
    </Card>
  );
};
