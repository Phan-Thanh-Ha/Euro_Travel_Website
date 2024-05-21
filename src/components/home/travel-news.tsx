import { FetchNews, fetchHandBook } from "@/actions/blogs";
import { Separator } from "../ui/separator";
import BlogsListCarosel from "../blogs/blog-list";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";

type TravelBlogSiteManagement = {
  slug: string;
};

export default async function TravelNewsList(items: TravelBlogSiteManagement) {
  /* const HandBookList = await FetchNews({
    Url: "/" + items.slug,
  }); */
  const HandBookList = await fetchHandBook({
    Take: 100,
    Url: "/tin-du-lich",
  });

  return (
    <div className="lg:container px-2  md:px-0  mt-12">
      <div className="flex flex-row items-center justify-between  px-2 md:px-0">
        <h2 className="md:text-2xl text-base font-bold text-main my-4 md:mb-4 md:mt-8  uppercase">
          TIN TỨC DU LỊCH
        </h2>
      </div>

      <BlogsListCarosel data={HandBookList} />
    </div>
  );
}
