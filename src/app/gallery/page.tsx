"use client";
import { dataGallery } from "./data";
import Link from "next/link";
import SliderShow from "./SlideShow";
import Rating from "./Rating";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ListImageTour from "./ListImageTour";
import { fetchGallery } from "@/actions/gallery";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Gallery() {
  const pathname = usePathname();
  const [galleryImages, setGalleryImages] = useState([]);
  useEffect(() => {
    galleryImage(pathname);
  }, [pathname]);
  let galleryImage = async (pathname: string) => {
    let res = await fetchGallery({
      Url: pathname.replace("/", ""),
      IsAll: true,
    });
    setGalleryImages(res);
  };
  console.log(galleryImages);
  return (
    <div className="container">
      <div className="w-full px-4">
        <div className="py-5">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>{galleryImages[0]?.ParentName}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        {/* slide show các tour chính */}
        <div className="md:pb-6 flex justify-center">
          <div className="h-[300px] md:h-[700px] w-full">
            <SliderShow data={galleryImages} />
          </div>
        </div>
        {/* Tiêu đề chính */}
        <div className="flex justify-center pb-8">
          <h1 className="sm:text-base md:text-xl text-main text-justify font-semibold w-full md:py-4 mx-auto">
            Góc trải nghiệm thực tế – tham quan các địa điểm du lịch nổi tiếng,
            trải nghiệm văn hóa địa phương, thưởng thức ẩm thực và nhiều hoạt
            động khác được quý khách hàng sử dụng dịch vụ tour du lịch cao cấp
            Âu – Úc – Mỹ tại
            <Link className="text-blue-500 hover:underline" href="/">
              {" "}
              EuroTravel
            </Link>
            .
          </h1>
        </div>
        {/* map dữ liệu tour và hình ảnh */}
        <div className="w-full">
          {galleryImages?.map((item: any, index: number) => (
            <div key={index} className="pb-4">
              <div className="flex justify-center ">
                <div className="flex flex-col items-center">
                  <h2 className="text-lg md:text-2xl font-bold text-main mt-2 md:mt-6 text-center uppercase">
                    <Link href={`${pathname}/${item.TagUrl}`}>
                      {item.TagName} cùng EuroTravel
                    </Link>
                  </h2>
                </div>
              </div>
              <div className="flex justify-center mb-2">
                <Rating rating={5} />
              </div>
              <div className="w-full">
                <ListImageTour data={item.Images} />
              </div>
              <div className="flex justify-center">
                <Link href={`${pathname}/${item.TagUrl}`}>
                  <button className="bg-main text-white text-sm md:text-xl py-2 px-11 my-3 rounded-lg shadow-md hover:bg-red-500">
                    Xem thêm
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
