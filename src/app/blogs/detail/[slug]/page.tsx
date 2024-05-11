import { fetchContent } from "@/actions/blogs";
import BlogDetailComp from "@/app/blogs/detail/[slug]/BlogDetailComp";
import { NewPagesComp } from "@/app/blogs/detail/[slug]/NewPagesComp";
import { NewTourComp } from "@/app/blogs/detail/[slug]/NewTourComp";
import { Breadcrum } from "@/components/home/bread-crumb";
import { HomeIcon } from "@radix-ui/react-icons";
import React from "react";

export default async function Blogs_Detail({
  params,
}: {
  params: { slug: string };
}) {
  const Url = params.slug;
  const Content = await fetchContent({
    Url: Url,
  });
  return (
    <div className="container px-2 mx-auto my-2 ">
      <Breadcrum
        items={[
          {
            href: "/",
            title: (
              <>
                <HomeIcon />
              </>
            ),
          },
          { title: "cẩm nang", isCurrentPage: true },
          { title: "Chi tiết bài viết", isCurrentPage: true },
        ]}
      />
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
        <div className="md:col-span-5">
          <BlogDetailComp content={Content} />
        </div>
        <div className="md:col-span-2">
          {/* Bài viết mới || Tour mới  */}
          <NewTourComp />
          <div className="mt-3 md:mt-10">
            <NewPagesComp />
          </div>
        </div>
      </div>
    </div>
  );
}
