"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

type Content = {
  ContentDetail: string;
  Title: string;
};

type Props = {
  content: Content[];
};

export default function TravelContentComp({ content }: Props) {
  const [isExpanded, setExpanded] = useState(false);

  const toggleContent = () => {
    setExpanded(!isExpanded);
  };
  return (
    <div className="my-10 px-2 md:px-0 ">
      <div
        dangerouslySetInnerHTML={{ __html: content?.ContentDetail || "" }}
        className={isExpanded ? "content_html" : "line-clamp-3 content_html"}
      />
      <div className="flex justify-center">
        <button
          className="overflow-hidden relative w-32 p-2 h-12 bg-main text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
          onClick={toggleContent}
        >
          {!isExpanded ? "Xem thêm" : "Thu gọn"}
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-blue-700 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-blue-default rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
          <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
            {!isExpanded ? "Xem thêm" : "Thu gọn"}
          </span>
        </button>
      </div>
    </div>
  );
}
