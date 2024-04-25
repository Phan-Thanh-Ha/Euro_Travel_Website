"use client";
import { dataTravelBlogsPage_Experience } from "@/app/blogs/[slug]/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState, useEffect } from "react";

interface DataTravelBlogPostNewProps {
  Id: number;
  Title: string;
  Content: string;
  Image: string;
  Slug: string;
  CreateTime: string;
  CreateName: string;
}
interface TravelBlogPostNewProps {
  Id: number;
  Title: string;
  Content: string;
  Image: string;
  Slug: string;
  CreateTime: string;
  CreateName: string;
}

export function BlogTravelComp({ data }: TravelBlogPostNewProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  // Khởi tạo trạng thái cho các mục hiện tại cần hiển thị trên trang.
  // currentItems là một mảng các đối tượng DataTravelBlogPostNewProps.
  // setCurrentItems là một hàm được sử dụng để cập nhật trạng thái của currentItems.
  const [currentItems, setCurrentItems] = useState<
    DataTravelBlogPostNewProps[]
  >([]);

  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // Tính toán tổng số trang cần thiết để hiển thị tất cả các mục.
    // Sử dụng Math.ceil để đảm bảo rằng nếu có bất kỳ mục nào còn lại sau khi chia đều cho các trang, một trang mới sẽ được thêm vào.
    setCurrentItems(
      dataTravelBlogsPage_Experience.slice(indexOfFirstItem, indexOfLastItem)
    );
  }, [currentPage]);

  const totalPages = Math.ceil(
    dataTravelBlogsPage_Experience.length / itemsPerPage
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {currentItems.map((item: any, index: number) => (
          <Card
            key={index}
            className="rounded-lg shadow-sm hover:shadow-2xl duration-300 group h-full flex flex-col"
          >
            <Link href={""}>
              <CardHeader className="p-0 overflow-hidden rounded-t-lg cursor-pointer ">
                <Image
                  src={item.Image}
                  alt={item.Title}
                  width={1200}
                  height={800}
                  quality={100}
                  className="w-auto h-[235px] md:h-[250px] object-cover  
                group-hover:scale-105  duration-300 ease-in-out overflow-hidden"
                />
              </CardHeader>
              <CardContent className=" p-2 py-4 md:p-4  relative flex-grow">
                <div className="flex flex-col gap-1 h-full">
                  <div className="flex justify-between">
                    <CardTitle className="flex-none text-black font-normal uppercase leading-4 mb-3 text-base cursor-pointer w-1/2">
                      <Link href={"/tour" + item?.Slug ?? ""}>
                        {item.CreateTime}
                      </Link>
                    </CardTitle>
                    <CardTitle className="flex-none text-black font-normal uppercase leading-4 mb-3 text-base cursor-pointer w-1/2">
                      <Link href={"/tour" + item?.Slug ?? ""}>
                        {item.CreateName}
                      </Link>
                    </CardTitle>
                  </div>
                  <CardTitle className="flex-none text-main uppercase leading-4 mb-3 font-bold text-base cursor-pointer">
                    <Link href={"/tour" + item?.Slug ?? ""}>{item.Title}</Link>
                  </CardTitle>
                  <CardTitle className="w-full font-light">
                    {item.Content.length > 70
                      ? item.Content.slice(0, 70) + "..."
                      : item.Content}
                  </CardTitle>
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
      <div className="mt-10">
        {currentItems.length > 0 && (
          <Pagination>
            <PaginationContent>
              {currentPage > 1 && (
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={() => handlePageChange(currentPage - 1)}
                  />
                </PaginationItem>
              )}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      href="#"
                      onClick={() => handlePageChange(page)}
                      isActive={page === currentPage}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                )
              )}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={() => handlePageChange(currentPage + 1)}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </div>
  );
}
