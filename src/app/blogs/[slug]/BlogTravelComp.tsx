"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import envConfig from "../../../../config";
import { format } from "date-fns";
import { dataTestPaging } from "../data";
import BlogCard from "@/components/blogs/card-blog";

export function BlogTravelComp(data: any) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [currentItems, setCurrentItems] = useState<any[]>(data.data ?? []);

  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    setCurrentItems(data.data?.slice(indexOfFirstItem, indexOfLastItem) ?? []);
  }, [currentPage, data]);

  const totalItems = data.data?.length ?? 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div>
      {currentItems.length > 0 ? (
        <div className="mt-5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {currentItems.map((item: any, index: number) => (
              <div key={index}>
                <BlogCard item={item} />
              </div>
            ))}
          </div>
          <div className="mt-5">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                </PaginationItem>
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
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      ) : (
        <div>Chưa có bài viết mới</div>
      )}
    </div>
  );
}
