import { Card } from "@/components/ui/card";
import Image from "next/image";
import envConfig from "../../../../../config";
import { fetchTourListNew } from "@/actions/tour";

export async function NewTourComp() {
  const HandBookList = await fetchTourListNew({
    Take: 7,
  });

  return (
    <div className="col-span-1 space-y-5">
      <span>Tour mới</span>
      {HandBookList.map((item: any, index: any) => (
        <Card
          key={index}
          className="rounded-lg shadow-sm hover:shadow-2xl duration-300 group h-full flex flex-col"
        >
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-1">
              <Image
                src={envConfig.NEXT_PUBLIC_CDN + item?.Image?.split(",")[0]}
                alt="nature"
                width={200}
                height={1}
                quality={100}
                className="w-auto h-[35px] md:h-[50px] object-cover"
              />
            </div>
            <div className="col-span-4 line-clamp-2">
              <a href={`/post/${item.Slug}`} className=" hover:text-blue-700">
                {item.NameTour}
              </a>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
