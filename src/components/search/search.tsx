import SearchForm from "@/components/forms/search-form";
import React from "react";

export default function SearchComponent() {
  return (
    <div className="bg-main h-full p-4 md:py-8 ">
      <div className="md:container bg-white p-4 md:p-8 rounded-xl">
        {" "}
        {/* <h2 className="text-xl font-semibold">
          Xin mời quý khách chọn chuyến du lịch
        </h2> */}
        <SearchForm />
      </div>
    </div>
  );
}
