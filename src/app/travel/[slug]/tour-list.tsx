import TourItem from "@/components/tour/tour-item-card";
import React from "react";

export default function TourList({ tour }: { tour: any }) {
  return (
    <div className="grid grid-cols-2 gap-2 md:gap-4">
      {tour?.length > 0 &&
        tour?.map((item: any, index: any) => {
          return <TourItem data={item} className="md:text-sm" key={index} />;
        })}
    </div>
  );
}
