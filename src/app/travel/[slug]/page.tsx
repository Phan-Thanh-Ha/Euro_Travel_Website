import React from "react";
import { HomeIcon } from "@radix-ui/react-icons";
import FilterTour from "@/components/forms/filter-form";
import TourList from "@/app/travel/[slug]/tour-list";
import SortComponent from "@/components/sort";
import { Breadcrum } from "@/components/home/bread-crumb";
import { Fetch_Travel_Content } from "@/actions/travel";
import TravelContentComp from "@/app/travel/[slug]/ContentComp";

import ImageComp from "@/app/travel/[slug]/ImageComp";
import { fetchTourList } from "@/actions/tour";
import ListTourHot from "@/components/tour/list-tour-hot";
import TravelNewsList from "@/components/home/travel-news";
import ContentPage from "@/app/travel/[slug]/content-page";
import LocationlLandmarks from "@/components/blogs/locationl-landmarks";

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
  let tour = await fetchTourList({ Id: 0 });
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
      <ContentPage tours={tour} data={data} />
      <div>
        <TravelContentComp content={data} />
      </div>
      {imgFeedback?.length > 0 && (
        <div className="flex flex-col justify-center mt-10 gap-4 text-main text-2xl md:text-3xl text-center">
          <h1>
            Hình ảnh thực tế khách hàng trải nghiệm du lịch tại Eurotravel
          </h1>
          <ImageComp data={imgFeedback} />
        </div>
      )}
      {/* <div className="flex flex-col justify-center mt-10 gap-4 text-main text-2xl md:text-3xl text-center">
        <h1>Địa danh nổi bật</h1>
        <ImageComp data={imgSpecial} />
      </div> */}
      <div className="flex flex-col justify-center mt-10 gap-4 text-main text-2xl md:text-3xl text-center">
        <ListTourHot />
      </div>
      <div className="flex flex-col justify-center mt-10 gap-4 text-main text-2xl md:text-3xl text-center">
        <LocationlLandmarks slug={slug} />
      </div>
      <div className="flex flex-col justify-center mt-10 gap-4 text-main text-2xl md:text-3xl text-center">
        <TravelNewsList slug={slug} />
      </div>
    </div>
  );
}
