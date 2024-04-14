import React from "react";
import { fetchTourGroup } from "@/actions/tour";
import TableGroup from "./table-group";

export default async function Page() {
  const tourGroups = await fetchTourGroup({
    Id: 0,
  });
  return (
    <div className="flex flex-col gap-12 mt-12 container w-full">
      <TableGroup tour={tourGroups} />
    </div>
  );
}
