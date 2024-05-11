import BlogList from "@/app/blogs/TravelblogsinterestComp";
import { Separator } from "../ui/separator";
import { fetchHandBook } from "@/actions/blogs";
import { format } from "date-fns";
import Link from "next/link";
import Image from "next/image";
import envConfig from "../../../config";

export default async function BannerBlogs() {
  const HandBookList = await fetchHandBook({
    Take: 100,
    Url: "/cam-nang",
  });
  return (
    <section className="lg:container  mt-10 px-2 md:px-0">
      <div className="flex flex-col items-center md:gap-5  px-2 md:px-0">
        <h2 className="text-lg md:text-2xl font-bold text-main mt-8  uppercase">
          Cẩm nang du lịch cùng Euro travel
          <Separator className="mt-2 mb-2" />
        </h2>
      </div>
      <div className="border-b-[1px]">
        <BlogList />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="col-span-1 py-2">
            <div className="sm:col-span-6 lg:col-span-5">
              <div className=" bg-cover text-center overflow-hidden">
                <Link href={"/blogs/detail/" + HandBookList[0]?.Url ?? ""}>
                  <Image
                    src={
                      envConfig.NEXT_PUBLIC_CDN + HandBookList[0]?.Images.split(",")[0]
                    }
                    alt={HandBookList[0]?.Title}
                    width={1200}
                    height={400}
                    quality={100}
                    className="w-full h-[235px] md:h-[300px] object-cover  
                group-hover:scale-105  duration-300 ease-in-out overflow-hidden rounded-lg"
                  />
                </Link>
              </div>
              <div
                className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                <div className="">

                  <div className="flex justify-between pb-2">
                    <span className=" text-black font-normal uppercase text-sm cursor-pointer align-middle flex items-end leading-none">
                      {format(new Date(HandBookList[0]?.CreateOn), "HH:mm dd/MM/yyyy")}
                    </span>
                    <div className="flex items-end">
                      <span className="text-gray-500 font-normal text-[12px] leading-none mr-1">Tác giả :</span>
                      <span className="leading-none">{HandBookList[0]?.StaffName}</span>
                    </div>
                  </div>
                  <Link href={"/blogs/detail/" + HandBookList[0]?.Url ?? ""} className="text-xl text-main font-bold mb-2 hover:text-indigo-600 transition duration-500 ease-in-out">
                    {
                      HandBookList[0]?.Title.length > 70
                        ? HandBookList[0]?.Title.slice(0, 70) + "..."
                        : HandBookList[0]?.Title
                    }
                  </Link>
                  <p className="text-gray-700 text-sm mt-2">
                    {
                      HandBookList[0]?.Description.length > 350
                        ? HandBookList[0]?.Description.slice(0, 350) + "..."
                        : HandBookList[0]?.Description
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* area list news */}
          <div className="col-span-1 py-2">
            {HandBookList.slice(1, 4).map((item: any, index: number) => (
              <div key={index} className=" flex items-start p-1 border-b-[1px]">
                <div className="w-1/3 pr-2">
                  <Link href={"/blogs/detail/" + item?.Url ?? ""} className="mr-3 block">
                    <div className=" bg-cover bg-center w-full">
                      <Image
                        src={
                          envConfig.NEXT_PUBLIC_CDN + item?.Images.split(",")[0]
                        }
                        alt={item?.Title}
                        width={1200}
                        height={800}
                        quality={100}
                        className="w-full h-[110px] md:h-full object-cover  
                group-hover:scale-105  duration-300 ease-in-out overflow-hidden rounded-lg"
                      />
                    </div>
                  </Link>
                </div>
                <div className="text-sm w-2/3">
                  <div className="flex justify-between pb-2">
                    <span className=" text-black font-normal uppercase text-sm cursor-pointer align-middle flex items-end leading-none">
                      {format(new Date(item?.CreateOn), "HH:mm dd/MM/yyyy")}
                    </span>
                    <div className="flex items-end">
                      <span className="text-gray-500 font-normal text-[12px] leading-none mr-1">Tác giả :</span>
                      <span className="leading-none">{item?.StaffName}</span>
                    </div>
                  </div>
                  <Link href={"/blogs/detail/" + item?.Url ?? ""} className="text-base text-main font-bold mb-2 hover:text-indigo-600 transition duration-500 ease-in-out">
                    {item?.Title.length > 70
                      ? item.Title.slice(0, 70) + "..."
                      : item.Title}
                  </Link>
                  <p className="text-gray-900 font-medium hover:text-indigo-600">
                    {item?.Description.length > 100
                      ? item.Description.slice(0, 100) + "..."
                      : item.Description}
                  </p>
                </div>
              </div>
            ))}
            <div className="flex justify-center">
              <button className="text-blue-600 hover:shadow-md hover:bg-main py-1 px-4 rounded-md my-3 bg-main-50">
                <Link href="/blogs" className="text-white">Xem thêm</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

