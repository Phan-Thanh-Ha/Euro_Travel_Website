import { Card } from "@/components/ui/card";
import Image from "next/image";
import envConfig from "../../../../../config";
import { fetchNewPage } from "@/actions/blogs";

export async function NewPagesComp() {
  const HandBookList = await fetchNewPage({
    Take: 7,
  });
  return (
    <div className="col-span-1 space-y-5">
      <span>Bài viết mới</span>
      {HandBookList.map((item: any, index: any) => (
        <Card
          key={index}
          className="rounded-lg shadow-sm hover:shadow-2xl duration-300 group h-full flex flex-col"
        >
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-1">
              <Image
                src={envConfig.NEXT_PUBLIC_CDN + item.Images.split(",")[0]}
                alt="nature"
                width={200}
                height={1}
                quality={100}
                className="w-auto h-[35px] md:h-[50px] object-cover"
              />
            </div>
            <div className="col-span-4 line-clamp-2">
              <a href={`/post/${item.Url}`} className=" hover:text-blue-700">
                {item.Title}
              </a>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
