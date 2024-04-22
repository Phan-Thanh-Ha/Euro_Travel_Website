import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import DiaLogRegisterTour from "@/components/tour/dialog-register-tour";
import envConfig from "../../../config";
import Link from "next/link";
type BlogItemProps = {
  Image: string;
  CreateTime: string;
  CreateName: string;
  Title: string;
  Description: string;
  Slug: string;
};

export default function BlogItem({ data }: { data: BlogItemProps }) {
  return (
    <Card className="rounded-lg   duration-300 group h-full flex flex-col">
      <Link href={"/tour" + data?.Slug ?? ""}>
        <CardHeader className="p-0 overflow-hidden rounded-t-lg cursor-pointer ">
          <Image
            src={envConfig.NEXT_PUBLIC_CDN + data.Image.split(",")[0]}
            alt="nature"
            width={1200}
            height={800}
            quality={100}
            className="w-auto h-[235px] md:h-[250px] object-cover  
           group-hover:scale-105  duration-300 ease-in-out overflow-hidden"
          />
        </CardHeader>
      </Link>

      <CardContent className=" p-2 py-4 md:p-4  relative flex-grow">
        <div className="flex flex-col gap-1 h-full">
          <CardTitle className="flex-none text-main uppercase leading-4 mb-3 font-bold text-base cursor-pointer">
            <Link href={"/tour" + data?.Slug ?? ""}>{data.Title}</Link>
          </CardTitle>
          <div className=" "></div>
        </div>
      </CardContent>
    </Card>
  );
}
