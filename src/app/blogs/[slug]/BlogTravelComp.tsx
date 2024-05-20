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
import BlogCardItem from "@/components/blogs/item-blog";

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

  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const goToLastPage = () => {
    setCurrentPage(totalPages);
  };

  const visiblePages = 3;
  const pagesBeforeCurrent = Math.floor(visiblePages / 2);
  const pagesAfterCurrent = Math.ceil(visiblePages / 2) - 1;

  let startPage = currentPage - pagesBeforeCurrent;
  let endPage = currentPage + pagesAfterCurrent;

  if (startPage < 1) {
    startPage = 1;
    endPage = Math.min(totalPages, visiblePages);
  }

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, totalPages - visiblePages + 1);
  }

  return (
    <div>
      {currentItems.length > 0 ? (
        <div className="mt-5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {currentItems.map((item: any, index: number) => (
              <div key={index}>
                <BlogCardItem item={item} />
              </div>
            ))}
          </div>
          <div className="mt-5">
            <Pagination>
              <PaginationContent>
                {
                  currentPage > 1 && (
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={goToFirstPage}
                      />
                    </PaginationItem>
                  )
                }
                {currentPage > 2 && (
                  <span>...</span>
                )}
                {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map(
                  (page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        onClick={() => handlePageChange(page)}
                        isActive={page === currentPage}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ))
                }
                {totalPages > 4 && currentPage < totalPages - 1 && (
                  <span>...</span>
                )}
                {
                  currentPage < totalPages && (
                    <PaginationItem>
                      <PaginationNext
                        onClick={goToLastPage}
                      />
                    </PaginationItem>
                  )
                }
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