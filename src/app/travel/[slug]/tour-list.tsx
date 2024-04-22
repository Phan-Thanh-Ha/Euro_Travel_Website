import TourItem from "@/components/tour/tour-item-card";
import React from "react";

export default function TourList({ data }: { data: any }) {
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
    <div className="grid grid-cols-3 gap-4">
      <TourItem data={tourData} className="md:text-sm" />{" "}
      <TourItem data={tourData} className="md:text-sm" />{" "}
      <TourItem data={tourData} className="md:text-sm" />{" "}
      <TourItem data={tourData} className="md:text-sm" />{" "}
    </div>
  );
}
