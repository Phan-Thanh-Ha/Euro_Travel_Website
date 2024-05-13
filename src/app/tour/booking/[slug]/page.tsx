import { fetchTour } from "@/actions/tour";
import { Breadcrum } from "@/components/home/bread-crumb";
import { HomeIcon } from "@radix-ui/react-icons";
import React from "react";

export default async function Booking({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const toursDetail = await fetchTour({
    Id: 0,
    Slug: "/" + slug,
  });

  return (
    <div className="container px-2 mx-auto my-4">
      {" "}
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
            title: <>Đặt tour</>,
          },
          { title: toursDetail[0]?.NameTour, isCurrentPage: true },
        ]}
      />
      <div className="">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8">8</div>
          <div className="col-span-4">4</div>
        </div>
      </div>
    </div>
  );
}
