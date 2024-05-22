"use client";
import { Button } from "@/components/ui/button";
import React, { useRef, useState } from "react";

type Content = {
  ContentDetail: string;
  Title: string;
};

type Props = {
  content: Content[];
};

export default function TravelContentComp({ content }: Props) {
  const [isExpanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const offset = 130;
  const toggleContent = () => {
    setExpanded(!isExpanded);
    if (contentRef.current) {
      const rect = contentRef.current.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const top = rect.top + scrollTop - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="my-10 px-2 md:px-0">
      <div className="relative" ref={contentRef}>
        <div
          dangerouslySetInnerHTML={{ __html: content?.ContentDetail || "" }}
          className={`transition-all duration-500 ${isExpanded ? "content_html" : "line-clamp-5 content_html"
            }`}
        />
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        )}
      </div>
      {/*  <hr className="my-2" /> */}
      <div className="flex justify-center py-2 rounded-md text-two border-two ">
        {content?.ContentDetail && (
          <button
            onClick={toggleContent}
            className=" flex items-center transition-colors duration-300 px-6 py-1 rounded-sm hover:text-main"
          >
            {!isExpanded ? (
              <>
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
                  className="w-5 h-5 mr-2"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <span>Xem thêm</span>
              </>
            ) : (
              <>
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
                  className="w-5 h-5 mr-2"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
                <span>Thu gọn</span>
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
