import BlogList from "@/app/blogs/TravelblogsinterestComp";
import { dataTravelBlogsHeader } from "@/app/blogs/data";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import envConfig from "../../../config";
import { format } from "date-fns";
import { fetchHandBook } from "@/actions/blogs";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
export default async function Blogs() {
  const HandBookList = await fetchHandBook({
    Take: 7,
    Url: "/cam-nang",
  });
  return (
    <div>
      <div className="container px-2 mx-auto ">
        <div className="py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Cẩm nang du lịch</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="bg-blue-50 p-8 rounded-lg">
          <div className="md:flex md:justify-between">
            <div className="">
              <h2 className="text-3xl font-bold text-main mb-4">Cẩm nang du lịch</h2>
              <p className="text-gray-700 mb-4">Bước vào cuộc hành trình khám phá Châu Âu với những cẩm nang du lịch độc đáo, được tổng hợp từ những người đam mê du lịch và chuyên gia hàng đầu. Tìm hiểu về những điểm đến tuyệt vời, văn hóa sâu sắc, ẩm thực độc đáo và lễ hội hấp dẫn trên khắp lục địa già.</p>
              <p className="text-gray-700 mb-4">Cẩm nang du lịch Châu Âu – Úc – là nguồn thông tin tin cậy để bạn khám phá những kỳ quan của Châu Âu. Từ các kinh nghiệm du lịch đến những bí quyết du lịch thông minh, chúng tôi luôn cập nhật những thông tin mới nhất giúp bạn chuẩn bị tốt nhất cho hành trình của mình.</p>
            </div>
          </div>
          <BlogList />
        </div>
        {dataTravelBlogsHeader.map((headerItem: any, headerIndex: any) => (
          <div key={headerIndex}>
            <h2 className="text-2xl text-main font-bold my-5">
              {headerItem?.Title}
            </h2>
            <Carousel
              className="w-full max-w-full group "
              opts={{
                align: "center",
                slidesToScroll: "auto",
                loop: true,
              }}
            >
              <CarouselContent>
                {HandBookList?.map((item: any, index: number) => {
                  return (
                    <CarouselItem
                      key={index}
                      className="  rounded-lg  pl-3  md:basis-1/3 basis-[85%] "
                    >
                      <Card className="rounded-lg shadow-sm hover:shadow-2xl duration-300 group h-full flex flex-col">
                        <Link href={`/blogs/detail/${item.Url}`}>
                          <Image
                            src={
                              envConfig.NEXT_PUBLIC_CDN +
                              item.Images.split(",")[0]
                            }
                            alt="nature"
                            width={1200}
                            height={800}
                            quality={100}
                            className="w-full h-[230px] md:h-[250px] object-cover  
                        group-hover:scale-103  duration-300 ease-in-out overflow-hidden rounded-lg"
                          />
                        </Link>
                        <CardContent className=" p-2 py-4 md:p-4  relative flex-grow">
                          <div className="flex flex-col gap-1 h-full">
                            <div className="flex justify-between">
                              <CardTitle className="flex-none text-black font-normal uppercase leading-4 mb-3 text-base cursor-pointer w-1/2">
                                <Link href={`${item.MenuUrl}/${item.Url}`}>
                                  {format(
                                    new Date(item.CreateOn),
                                    "HH:mm dd/MM/yyyy"
                                  )}
                                </Link>
                              </CardTitle>
                              <CardTitle className="flex-none text-black font-normal uppercase leading-4 mb-3 text-base cursor-pointer w-1/2">
                                <Link href={`${item.MenuUrl}/${item.Url}`}>
                                  {`${item.StaffName}`}
                                </Link>
                              </CardTitle>
                            </div>
                            <CardTitle className="flex-none text-main uppercase leading-4 mb-3 font-bold text-base cursor-pointer">
                              <Link href={`${item.MenuUrl}/${item.Url}`}>
                                {item.Title}
                              </Link>
                            </CardTitle>
                            <CardTitle className="w-full font-light">
                              {item.Description.length > 70
                                ? item.Description.slice(0, 70) + "..."
                                : item.Description}
                            </CardTitle>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-main/50 text-white hidden  disabled:hidden md:group-hover:flex" />
              <CarouselNext className="right-4  bg-main/50  text-white  hidden  disabled:hidden md:group-hover:flex" />
            </Carousel>
          </div>
        ))}
      </div>
    </div>
  );
}
