import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type Content = {
  Content: string;
  Title: string;
};

type Props = {
  content: Content[];
};

export default function BlogDetailComp({ content }: Props) {
  return (
    <div>
      {content ? (
        <div><h1 className=" my-4 text-3xl text-main font-semibold">
          {content[0]?.Title}
        </h1>
          <div
            className="content_html"
            dangerouslySetInnerHTML={{ __html: content[0].Content }}
          /></div>
      ) : (
        <div>
          <h4 className="text-xl font-extralight text-center my-5">Bài viết chưa có nội dung ! !</h4>
          <div className="flex justify-center items-center">
            <Link href={"/blogs"}>
              <Button className="py-3 px-6 rounded-sm m-2">
                Xem bài viết khác
              </Button>
            </Link>

          </div>
        </div>
      )}
    </div>
  );
}
