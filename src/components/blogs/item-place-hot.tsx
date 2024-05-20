import Image from "next/image";
import envConfig from "../../../config";
import Link from "next/link";
interface CardProps {
  item: any;
}

const BlogCardItemPlaceHot: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="relative flex flex-col h-full rounded-lg overflow-hidden cursor-pointer group">
      <Link href={item?.Url}>
        <div className="relative w-full h-[500px]">
          <Image
            src={envConfig.NEXT_PUBLIC_CDN + item?.Images.split(",")[0]}
            alt="nature"
            width={600}
            height={600}
            className="w-full h-[500px] object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-600"></div>
          <span className="absolute bottom-2 z-20 w-9/12 drop-shadow-md uppercase left-1/2 transform -translate-x-1/2 translate-y-0 text-white  text-base transition-all duration-500 ease-in-out group-hover:translate-y-[-50%] group-hover:top-1/2 group-hover:text-xl ">
            <p className="text-center">
              {item?.SiteName || "Không phải thành phố Australia"}
            </p>
          </span>
          <div
            className=" pointer-events-none p-2 rounded-lg absolute bottom-0 inset-x-0 overlay bg-gradient-to-t from-sky-600 via-sky-700/70
                  to-transparent h-[150px]"
          ></div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCardItemPlaceHot;
