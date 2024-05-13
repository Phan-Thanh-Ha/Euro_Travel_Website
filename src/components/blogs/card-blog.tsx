import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import envConfig from "../../../config";

interface CardProps {
  item: any;
}

const BlogCard: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="rounded-lg shadow-sm hover:shadow-2xl duration-300 group h-full flex flex-col relative">
      {/* Badge "Hot" */}
      {item?.IsHot && (
        <span className="absolute top-1 left-1 z-10 bg-red-500 text-white px-2 py-1 rounded-tr-md rounded-bl-md">
          Hot
        </span>
      )}
      <div className="p-0 overflow-hidden rounded-t-lg cursor-pointer">
        <Link href={"/chi-tiet-bai-viet/" + item?.Url ?? ""}>
          <Image
            src={envConfig.NEXT_PUBLIC_CDN + item?.Images.split(",")[0]}
            alt={item?.Title}
            width={1200}
            height={800}
            quality={100}
            className="w-full h-[235px] md:h-[250px] object-cover group-hover:scale-105 duration-300 ease-in-out overflow-hidden rounded-lg"
          />
        </Link>
      </div>
      <div className="p-2 py-4 md:p-4 relative flex-grow">
        <div className="flex flex-col h-full">
          <div className="flex justify-between pb-2">
            <span className="text-black font-normal uppercase text-sm cursor-pointer align-middle flex items-end leading-none">
              {format(new Date(item?.CreateOn), "HH:mm dd/MM/yyyy")}
            </span>
            <div className="flex items-end">
              <span className="leading-none">{item?.StaffName}</span>
            </div>
          </div>
          <h3 className="flex-none text-main uppercase font-bold text-base cursor-pointer mb-2 hover:text-blue-800">
            <Link href={"/chi-tiet-bai-viet/" + item?.Url ?? ""}>
              {item?.Title}
            </Link>
          </h3>
          <p className="w-full font-light text-sm">
            {item?.Description.length > 70
              ? item.Description.slice(0, 70) + "..."
              : item.Description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
