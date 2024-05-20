import BlogList from "@/app/blogs/TravelblogsinterestComp";
import { Separator } from "../ui/separator";
import { fetchHandBook } from "@/actions/blogs";
import { format } from "date-fns";
import Link from "next/link";
import Image from "next/image";
import envConfig from "../../../config";

export default async function BannerBlogs() {
  const data = await fetchHandBook({
    Take: 100,
    Url: "/cam-nang",
    IsHot: true,
  });
  return (
    <section className="lg:container  mt-10 px-2 md:px-0">
      <div className="flex flex-col items-center md:gap-5  px-2 md:px-0">
        <h2 className="text-lg md:text-2xl font-bold text-main mt-8  uppercase">
          Cẩm nang du lịch cùng Euro travel
          <Separator className="mt-2 mb-2" />
        </h2>
      </div>
      <div className="grid gap-2">
        <BlogList />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 ">
          {data.slice(0, 3).map((blog: any, index: any) => {
            return (
              <div className="relative" key={index}>
                <Link href={"/chi-tiet-bai-viet/" + blog?.Url ?? ""}>
                  <Image
                    src={envConfig.NEXT_PUBLIC_CDN + blog?.Images.split(",")[0]}
                    alt={blog?.Title}
                    width={1200}
                    height={400}
                    quality={100}
                    className="w-full h-[235px] md:h-[400px] object-cover  
                rounded-lg"
                  />
                </Link>
                <div
                  className=" pointer-events-none p-2 rounded-lg absolute bottom-0 inset-x-0 overlay bg-gradient-to-t from-sky-900 via-sky-700/70
                 to-transparent h-[150px] md:h-[200px]"
                >
                  <div className="flex flex-col justify-end h-full md:gap-2">
                    <div className="flex flex-row text-gray-300 text-sm justify-between gap-2">
                      <span>
                        {format(new Date(blog?.CreateOn), "HH:mm dd/MM/yyyy")}
                      </span>
                      <span>{blog?.StaffName}</span>
                    </div>
                    <h2 className="text-white line-clamp-2 text-lg md:text-xl text-ellipsis">
                      {blog?.Title}
                    </h2>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
