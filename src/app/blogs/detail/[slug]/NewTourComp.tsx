import Image from "next/image";
import envConfig from "../../../../../config";
import { fetchTourListNew } from "@/actions/tour";
import { FormatMoneyVND } from "@/utils/FormatMoneyVND";
import Link from "next/link";

export async function NewTourComp() {
  const HandBookList = await fetchTourListNew({
    Take: 7,
  });

  const limitData = HandBookList.length <= 5 ? HandBookList : HandBookList.slice(0, 5);
  return (
    <div className="col-span-1">
      <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-main mb-3 border-b-[1px]">Tour du lịch mới</h1>
      {limitData.map((item: any, index: any) => (
        <div
          key={index}
          className="border-b-[1px] hover:shadow-md hover:rounded-lg duration-300 group h-full flex flex-col py-1"
        >
          <div className="grid grid-cols-5 gap-2">
            <div className="col-span-2 flex items-center">
              <Image
                src={envConfig.NEXT_PUBLIC_CDN + item?.Image?.split(",")[0]}
                alt="nature"
                width={300}
                height={1}
                quality={100}
                className="w-full h-[100px] md:h-[160px] lg:h-[80px] object-cover rounded-lg my-1"
              />
            </div>
            <div className="col-span-3">
              <div className="md:h-[60px] block overflow-hidden">
                <Link href={`/tour/${item.Slug}`} className=" ">
                  <p className="text-xl lg:text-sm text-black hover:text-blue-700" >
                    {item.NameTour.length > 70
                      ? item.NameTour.slice(0, 70) + "..."
                      : item.NameTour}
                  </p>
                </Link>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">Trọn gói :</p>
                <p className="text-main text-base text-end">{FormatMoneyVND(item?.Price)}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-center">
        <button className="text-blue-600 hover:shadow-md hover:bg-main py-1 px-4 rounded-md m-2 bg-main-50">
          <a href="/tour" className="text-white">Xem thêm</a>
        </button>
      </div>
    </div>
  );
}
