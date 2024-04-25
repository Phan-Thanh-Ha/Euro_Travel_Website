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
    <div className="container px-2 mx-auto mt-10 ">
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
          { title: "blogs", isCurrentPage: true },
          { title: "Travel_Experience", isCurrentPage: true },
        ]}
      />
      <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
        <div className="md:col-span-5">
          <BlogDetailComp content={Content} />
        </div>
        <div className="md:col-span-2">
          {/* Bài viết mới || Tour mới  */}
          <NewTourComp />
          <div className="mt-20">
            <NewPagesComp />
          </div>
        </div>
      </div>
    </div>
  );
}
