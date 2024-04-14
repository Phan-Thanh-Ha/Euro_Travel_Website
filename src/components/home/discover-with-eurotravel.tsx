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

export default function DiscoverWith({ data }: { data: any }) {
  let res = data.filter((item) => item.KeySelect === "AuUcMy");
  return (
    <section className="lg:container  mt-10 px-2 md:px-0">
      <div className="flex flex-col items-center">
        <h2 className="text-lg md:text-2xl text-center font-bold text-main my-8  uppercase">
          Khám phá Âu - Úc - Mỹ cùng EuroTravel
          <Separator />
        </h2>
      </div>
      <div className=" grid md:grid-cols-6  gap-4 ">
        {res[0].BannerList.map((item, index) => (
          <div
            key={index}
            className={
              index > 2
                ? "md:col-span-3 h-52 md:h-80"
                : " md:col-span-2 h-52 md:h-56"
            }
          >
            <YouTubeIframe src={item.UrlSlide} />
          </div>
        ))}
      </div>
    </section>
  );
}

const YouTubeIframe = ({ src }) => {
  return (
    <iframe
      src={src}
      className=" inset-0 w-full h-full rounded-lg"
      frameBorder="0"
      allowFullScreen
    ></iframe>
  );
};
