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
  console.log("🚀🚀🚀 ======== content========", content);
  const [isExpanded, setExpanded] = useState(false);

  const toggleContent = () => {
    setExpanded(!isExpanded);
  };
  return (
    <div>
      <div
        dangerouslySetInnerHTML={{ __html: content[0].ContentDetail }}
        className={isExpanded ? "" : "line-clamp-3"}
      />
      <div className="flex justify-center">
        <Button onClick={toggleContent}>
          {isExpanded ? "Thu gọn" : "Xem thêm"}
        </Button>
      </div>
    </div>
  );
}
