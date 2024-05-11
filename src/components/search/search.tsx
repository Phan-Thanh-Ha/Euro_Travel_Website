import SearchForm from "@/components/forms/search-form";
import React from "react";

export default function SearchComponent() {
  return (
    <div className="  w-full">
      <div className="md:container bg-white/90 p-4 md:p-8 rounded-xl shadow-xl">
        {" "}
        <h2 className="text-xl font-semibold text-blue-default text-center mb-4">
          Xin mời quý khách chọn chuyến du lịch
        </h2>
        <SearchForm />
      </div>
    </div>
  );
}
