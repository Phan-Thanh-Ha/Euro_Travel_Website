import Image from "next/image";
import envConfig from "../../../../../config";
import { fetchNewPage } from "@/actions/blogs";
import Link from "next/link";

export async function NewPagesComp() {
  const HandBookList = await fetchNewPage({
    Take: 7,
  });
  const limitData = HandBookList.length <= 5 ? HandBookList : HandBookList.slice(0, 5);
  return (
    <div className="col-span-1 space-y-2">
      <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-main mb-3 border-b-[1px]">Bài viết mới</h1>
      {limitData.map((item: any, index: any) => (
        <div
          key={index}
          className="border-b-[1px] hover:shadow-md hover:rounded-lg duration-300 group h-full flex flex-col py-1"
        >
          <div className="grid grid-cols-5 gap-2">
            <div className="col-span-2 flex items-center">
              <Image
                src={envConfig.NEXT_PUBLIC_CDN + item.Images.split(",")[0]}
                alt="nature"
                width={300}
                height={1}
                quality={100}
                className="w-full h-[100px] md:h-[160px] lg:h-[80px] object-cover rounded-lg my-1"
              />
            </div>
            <div className="col-span-3">
              <div className="">
                <Link href={`/blogs/detail/${item.Url}`} className=" hover:text-blue-700">
                  <p className="text-xl lg:text-sm text-black hover:text-blue-600">
                    {item.Title.length > 120
                      ? item.Title.slice(0, 120) + "..."
                      : item.Title}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-center">
        <button className="text-blue-600 hover:shadow-md hover:bg-main py-1 px-4 rounded-md m-2 bg-main-50">
          <Link href="/blogs" className="text-white">Xem thêm</Link>
        </button>
      </div>
    </div>
  );
}
