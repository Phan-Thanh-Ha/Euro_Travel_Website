import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import React from "react";

export default function TableGroup({ tour }: { tour: any }) {
  return (
    <Table className="border rounded-lg">
      <TableHeader>
        <TableRow className="bg-red-500">
          <TableHead className="text-center border border-r-1 w-[40px] text-white font-bold">
            Tháng
          </TableHead>
          <TableHead className="text-center border border-r-1 w-[120px] text-white font-bold">
            Lịch trình tour
          </TableHead>
          <TableHead className="text-center border border-r-1 w-[120px] text-white font-bold">
            Khởi hành
          </TableHead>
          <TableHead className="text-center border border-r-1 w-[70px] text-white font-bold">
            Khách sạn
          </TableHead>
          <TableHead className="text-center border border-r-1 w-[70px] text-white font-bold">
            Hàng không
          </TableHead>
          <TableHead className="text-center w-[70px] text-white font-bold">
            Giá tour (VNĐ)
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableHead className="text-center">1</TableHead>
          <TableHead className="text-center">{tour[0].NameTour}</TableHead>
          <TableHead className="text-center">Khởi hành</TableHead>
          <TableHead className="text-center">Khách sạn</TableHead>
          <TableHead className="text-center">Hàng không</TableHead>
          <TableHead className="text-center">Giá tour (VNĐ)</TableHead>
        </TableRow>
      </TableBody>
    </Table>
  );
}
