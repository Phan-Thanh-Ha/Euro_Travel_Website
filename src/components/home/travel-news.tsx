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
      <div className="flex justify-between items-center px-2">
        <h2 className="md:text-2xl text-base font-bold text-main my-4   uppercase">
          TIN TỨC DU LỊCH
        </h2>
        <Link
          href="/cam-nang/tin-du-lich"
          className="flex flex-row gap-1 items-center text-sm md:text-base underline text-main font-semibold flex-none"
        >
          Xem thêm
          <ArrowRightIcon />
        </Link>
      </div>

      <BlogsListCarosel data={HandBookList} />
    </div>
  );
}
