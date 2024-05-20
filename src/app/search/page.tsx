"use client";
import React, { Suspense, useEffect, useState } from "react";
import { HomeIcon } from "@radix-ui/react-icons";
import FilterTour from "@/components/forms/filter-form";
import TourList from "@/app/travel/[slug]/tour-list";
import SortComponent from "@/components/sort";
import { Breadcrum } from "@/components/home/bread-crumb";
import { useSearchParams } from "next/navigation";
import { fetchFilterTour } from "@/actions/tour";
import { format } from "date-fns";

function SearchPageContent() {
  const searchParams = useSearchParams();
  const start = searchParams.get("s");
  const end = searchParams.get("e");
  const date = searchParams.get("d");
  const [filter, setFilter] = useState({
    StartPlace: 1,
    EndPlace: 1,
    Day: 0,
    PriceFrom: 0,
    PriceTo: 200000000,
    Date: format(new Date(), "MM-dd-yyyy 00:00:00"),
  });
  const [tour, setTour] = useState([]);

  useEffect(() => {
    searchFirst();
  }, []);

  const searchFirst = async () => {
    try {
      if (start && end) {
        setFilter({
          ...filter,
          StartPlace: start,
          EndPlace: end,
          Date: date,
        });
      }
      const response = await fetchFilterTour({
        StartPlace: start,
        EndPlace: end,
        Day: 0,
        PriceFrom: 0,
        PriceTo: 200000000,
        Date: date,
      });
      setTour(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="lg:container">
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
              title: <>Tìm kiếm</>,
            },
          ]}
        />
      </div>
      <div className="content flex flex-row gap-4">
        <div className="basis-[289px] w-full sticky top-[100px] filter p-4 bg-slate-50 shadow-sm h-fit hidden lg:block">
          <h2 className="text-xl font-semibold text-blue-default mb-5">
            Bộ lọc tìm kiếm
          </h2>
          <FilterTour setTour={setTour} />
        </div>
        <div className="main flex-1 col-span-3 px-2 md:px-0">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-main mb-2">
            Tìm kiếm
          </h2>

          <div className="flex justify-between items-center py-5">
            <p>
              Chúng tôi tìm thấy{" "}
              <span className="font-bold">{tour?.length || 0}</span> tour cho
              quý khách
            </p>
            <div>
              <SortComponent sort={"1"} />
            </div>
          </div>
          <TourList tour={tour} />
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchPageContent />
    </Suspense>
  );
}
