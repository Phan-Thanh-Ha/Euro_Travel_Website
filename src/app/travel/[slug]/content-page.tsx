"use client";
import TourList from "@/app/travel/[slug]/tour-list";
import FilterTour from "@/components/forms/filter-form";
import DiaLogFilterTour from "@/components/search/filter-modal";
import SortComponent from "@/components/sort";
import React, { useState } from "react";

export default function ContentPage({ tours, data }: { tour: any; data: any }) {
  const [tour, setTour] = useState(tours);

  return (
    <div className="content flex flex-row gap-4">
      <div className="basis-[289px] w-full sticky top-[100px] filter p-4 bg-slate-50 shadow-sm h-fit hidden lg:block">
        <h2 className="text-xl font-semibold text-blue-default mb-5">
          Bộ lọc tìm kiếm
        </h2>
        <FilterTour setTour={setTour} className="" filter={{}} />
      </div>
      <div className="main flex-1 col-span-3 px-2 md:px-0 ">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-main mb-2">
          {data.ContentName}
        </h2>
        <div dangerouslySetInnerHTML={{ __html: data?.ContentIntro || "" }} />

        <div className="flex justify-between items-center py-5">
          <p className="hidden md:block">
            Chúng tôi tìm thấy{" "}
            <span className="font-bold">{tour?.length || 0}</span> tour cho quý
            khách
          </p>
          <div className="md:hidden w-full mr-2">
            <DiaLogFilterTour setTour={setTour} filter={{}} />
          </div>
          <div>
            <SortComponent tour={tour} setTour={setTour} />
          </div>
        </div>
        <TourList tour={tour} />
      </div>
    </div>
  );
}
