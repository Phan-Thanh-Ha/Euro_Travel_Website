import React from "react";
import { HomeIcon } from "@radix-ui/react-icons";
import FilterTour from "@/components/forms/filter-form";
import TourList from "@/app/travel/[slug]/tour-list";
import SortComponent from "@/components/sort";
import { Breadcrum } from "@/components/home/bread-crumb";
import { Fetch_Travel_Content } from "@/actions/travel";
import TravelContentComp from "@/app/travel/[slug]/ContentComp";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import envConfig from "../../../../config";
import ImageComp from "@/app/travel/[slug]/ImageComp";

export default async function TravelPage({
  params,
}: {
  params: { Url: string };
}) {
  const { Url } = params;
  const Content = await Fetch_Travel_Content({
    Url: "/du-lich-phap",
  });
  return (
    <div className="lg:container  ">
      <div className="my-2 mx-2 md:mx-0">
        <Breadcrum
          items={[
            {
              href: "/",
              title: (
                <>
                  <HomeIcon />
                </>
              ),
            },
            { title: "Du-lich", isCurrentPage: true },
            { title: "Du-lich-phap", isCurrentPage: true },
          ]}
        />
      </div>
      <div className="content flex flex-row gap-4">
        <div className="basis-[289px] w-full sticky top-[50px] filter p-4 bg-slate-50 shadow-sm h-fit">
          <h2 className="text-xl font-semibold text-blue-default mb-5">
            Bộ lọc tìm kiếm
          </h2>
          <FilterTour />
        </div>
        <div className="main flex-1 col-span-3 ">
          <div dangerouslySetInnerHTML={{ __html: Content[0].ContentIntro }} />

          <div className="flex justify-between items-center py-5">
            <p>Chúng tôi tìm thấy xx tour cho quý khách</p>
            <div>
              <SortComponent sort={"1"} />
            </div>
          </div>
          <TourList />
        </div>
      </div>
      <div>
        <TravelContentComp content={Content} />
      </div>
      <div className="flex justify-center mt-10">
        <h1>HÌNH ẢNH THỰC TẾ KHÁCH HÀNG TRẢI NGHIỆM DỊCH VỤ CỦA EUROTRAVEL</h1>
      </div>
      <ImageComp data={Content} />
      <div className="flex justify-center mt-10">
        <h1>ĐỊA DANH NỔI BẬT</h1>
      </div>
      <ImageComp data={Content} />
      <div className="flex justify-center mt-10">
        <h1>Tour nỗi bật</h1>
      </div>
      <TourList />
      <div className="flex justify-center mt-10">
        <h1>THÔNG TIN DU LỊCH</h1>
      </div>
      <ImageComp data={Content} />
    </div>
  );
}
