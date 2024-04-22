import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Price({ data }: { data: any }) {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold text-main  mb-4 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-gem"
        >
          <path d="M6 3h12l4 6-10 13L2 9Z" />
          <path d="M11 3 8 9l4 13 4-13-3-6" />
          <path d="M2 9h20" />
        </svg>
        Bảng giá tour
      </h2>
      <div className="card-new p-2 md:p-4">
        <Table className="">
          <TableCaption>
            (*) Áp dụng tùy theo điều kiện tour thực tế và thời gian khách hàng
            đăng ký tour. Chương trình ưu đãi chỉ áp dụng cho giá tour người
            lớn.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead
                colSpan={2}
                className="text-center text-xl text-blue-default font-semibold"
              >
                Bảng giá {data?.NameTour}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-base">
            <TableRow className="">
              <TableCell className="font-medium py-4">Người lớn</TableCell>
              <TableCell className="font-semibold text-center  border-l">
                {data?.PriceAdult}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium py-4">
                Trẻ em từ 2 – 11 tuổi
              </TableCell>
              <TableCell className="font-semibold text-center  border-l">
                {data?.PriceChild}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium py-4">
                Trẻ em dưới 2 tuổi
              </TableCell>
              <TableCell className="font-semibold text-center border-l">
                {data?.PriceInfant}
              </TableCell>
            </TableRow>
            <TableRow className="">
              <TableCell
                colSpan={2}
                className="font-bold text-center py-2 md:py-4 border-b"
              >
                Ưu đãi đặc biệt:{" "}
                <span className="text-main">{data?.Promotion}</span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: data?.DescriptionPrice }}
        className="mt-5"
      ></div>
    </div>
  );
}
