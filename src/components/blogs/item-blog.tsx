import Image from "next/image";
import envConfig from "../../../config";
import Link from "next/link";
import { format } from "date-fns";

interface CardProps {
  item: any;
}

const BlogCardItem: React.FC<CardProps> = ({ item }) => {
  /* console.log(item); */
  return (
    <div className="relative">
      <Link href={"/chi-tiet-bai-viet/" + item?.Url ?? ""}>
        {/* {
          item.IsHot ? (
            <Image
              src="/images/hot-icon.png"
              alt={item?.NameTour}
              width={80}
              height={80}
              quality={100}
              className="h-[40px] w-fit object-cover
        rounded-lg absolute left-2 top-3 z-10 animate-bounce"
            />
          ) : null
        } */}
        <Image
          src={envConfig.NEXT_PUBLIC_CDN + item?.Images.split(",")[0]}
          alt={item?.Title}
          width={1200}
          height={400}
          quality={100}
          className="w-full h-[235px] md:h-[400px] object-cover  
                rounded-lg"
        />
      </Link>
      <div
        className=" pointer-events-none p-2 rounded-lg absolute bottom-0 inset-x-0 overlay bg-gradient-to-t from-sky-900 via-sky-700/70
                 to-transparent h-[100px] md:h-[120px]"
      >
        <div className="flex flex-col justify-end h-full md:gap-2">
          <div className="flex flex-row text-gray-100 text-sm justify-between gap-2">
            <span>
              {format(new Date(item?.CreateOn), "HH:mm dd/MM/yyyy")}
            </span>
            <span>{item?.StaffName}</span>
          </div>
          <h2 className="text-white line-clamp-2 text-lg md:text-xl text-ellipsis">
            {item?.Title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BlogCardItem;
