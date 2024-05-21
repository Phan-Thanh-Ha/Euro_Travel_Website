"use client";
import React, { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { debounce } from "@/utils/debounce";

interface SortProps {
  setTour: (tour: string) => void;
  tour: [];
}

export default function SortComponent({ tour, setTour }: SortProps) {
  const [sort, setSort] = useState("1");
  useEffect(() => {
    handleSort();
  }, [sort]);

  const handleSort = debounce(() => {
    let sortedTours = [];
    if (tour?.length > 0) {
      if (sort === "1") {
        sortedTours = [...tour].sort(
          (a: any, b: any) => new Date(a.CreateOn) - new Date(b.CreateOn)
        );
      } else if (sort === "2") {
        sortedTours = [...tour].sort((a, b) => a.Price - b.Price);
      } else {
        sortedTours = [...tour].sort((a, b) => b.Price - a.Price);
      }
      setTour(sortedTours);
    }
  }, 1000);

  return (
    <div className="flex flex-row items-center gap-2 z-50">
      <span className="hidden md:block">Sắp xếp theo</span>
      <Select value={sort} onValueChange={setSort}>
        <SelectTrigger className="w-[180px] ">
          <SelectValue placeholder="Select " className="" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="1">Mới nhất</SelectItem>
            <SelectItem value="2">Giá thấp -&gt; cao</SelectItem>
            <SelectItem value="3">Giá cao -&gt; thấp</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
