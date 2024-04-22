import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SortProps {
    setSort: (sort: string) => void;
    sort: string;
    }

export default function SortComponent({setSort, sort}: SortProps) {

  return (
    <div className="flex flex-row items-center gap-2">
      <span>Sắp xếp theo</span>
      <Select value={sort} onValueChange={setSort}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="1">Mới nhất</SelectItem>
            <SelectItem value="2">Giá thấp -> cao</SelectItem>
            <SelectItem value="3">Giá cao -> thấp</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
