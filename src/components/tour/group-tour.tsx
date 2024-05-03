import { fetchTourGroup, fetchTourGroups } from "@/actions/tour";
import TourItem from "@/components/tour/tour-item-card";
import React from "react";

export default async function GroupTour() {
  const toursGroup = await fetchTourGroups({
    Id: 0,
    Slug: "",
  });
  return toursGroup.map((item, index) => {
    return (
      <div className="lg:container" key={index}>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-main my-5  uppercase">
            {item.NameVn}
          </h2>
        </div>
        <div className=" grid md:grid-cols-3  gap-4 px-2 md:px-0">
          {item.Tours.map((tour, index2) => {
            return <TourItem key={index2} data={tour} />;
          })}
        </div>
      </div>
    );
  });
}
