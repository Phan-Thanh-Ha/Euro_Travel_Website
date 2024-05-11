import React from "react";
import { HomeIcon } from "@radix-ui/react-icons";
import FilterTour from "@/components/forms/filter-form";
import TourList from "@/app/travel/[slug]/tour-list";
import SortComponent from "@/components/sort";
import { Breadcrum } from "@/components/home/bread-crumb";
import { Fetch_Travel_Content } from "@/actions/travel";
import TravelContentComp from "@/app/travel/[slug]/ContentComp";

import ImageComp from "@/app/travel/[slug]/ImageComp";

export default async function TravelPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const Content = await Fetch_Travel_Content({
    Url: "/" + slug,
  });
  let data = Content.length > 0 ? Content[0] : {};
  let imgFeedback = data?.ImageFeedback?.split(",") || [];
  let imgSpecial = data?.PlaceSpecial?.split(",") || [];

  return (
    <div className="lg:container  ">
      <div className="my-5 mx-2 md:mx-0">
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
            {
              href: "/",
              title: <>Du lịch</>,
            },
            { title: data?.ContentName, isCurrentPage: true },
          ]}
        />
      </div>
      <div className="content flex flex-row gap-4">
        <div className="basis-[289px] w-full sticky top-[100px] filter p-4 bg-slate-50 shadow-sm h-fit hidden lg:block">
          <h2 className="text-xl font-semibold text-blue-default mb-5">
            Bộ lọc tìm kiếm
          </h2>
          <FilterTour />
        </div>
        <div className="main flex-1 col-span-3 px-2 md:px-0 ">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-main mb-2">
            {data.ContentName}
          </h2>
          <div dangerouslySetInnerHTML={{ __html: data?.ContentIntro || "" }} />

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
        <TravelContentComp content={data} />
      </div>
      <div className="flex flex-col justify-center mt-10 gap-4 text-main text-2xl md:text-3xl text-center">
        <h1>Hình ảnh thực tế khách hàng trải nghiệm du lịch tại Eurotravel</h1>
        <ImageComp data={imgFeedback} />
      </div>
      <div className="flex flex-col justify-center mt-10 gap-4 text-main text-2xl md:text-3xl text-center">
        <h1>Địa danh nổi bật</h1>
        <ImageComp data={imgSpecial} />
      </div>
      {/* <div className="flex flex-col justify-center mt-10 gap-4 text-main text-2xl md:text-3xl text-center">
        <h1>Tour nổi bật</h1>
        <TourList />
      </div> */}
      {/* <div className="flex justify-center mt-10 gap-4 text-main text-2xl md:text-3xl text-center">
        <h1>Thông tin du lịch</h1>
      </div> */}
      {/* <ImageComp data={Content} /> */}
    </div>
  );
}
