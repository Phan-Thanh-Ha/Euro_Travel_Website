import TourItem from "@/components/tour/tour-item-card";
import React from "react";

export default function TourList({ tour }: { tour: any }) {
  let tourData = {
    Destination: "Pháp - Thụy Sĩ - Đức - Áo - Séc - Hungary",
    DeparturePoint: "Hanoi/ Ho Chi Minh",
    DateStart: "12-12",
    Flight: "VN202",
    Image:
      "/Content/Upload/Tour/2024/04/du-lich-chau-au-4-nuoc-dia-trung-hai-he-2024_eurotravel.jpg",
    NameTour: "Trip to Paris",
    Timeline: "7 days",
    Slug: "trip-to-paris",
    Price: 120000000,
  };

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {tour?.length > 0 &&
        tour?.map((item: any, index: any) => {
          return <TourItem data={item} className="md:text-sm" key={index} />;
        })}
      {/* <TourItem data={tourData} className="md:text-sm" />{" "}
      <TourItem data={tourData} className="md:text-sm" />{" "}
      <TourItem data={tourData} className="md:text-sm" />{" "}
      <TourItem data={tourData} className="md:text-sm" />{" "}
      <TourItem data={tourData} className="md:text-sm" />{" "}
      <TourItem data={tourData} className="md:text-sm" />{" "} */}
    </div>
  );
}
