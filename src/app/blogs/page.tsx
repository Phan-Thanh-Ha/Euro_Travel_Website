import BlogList from "@/app/blogs/TravelblogsinterestComp";
import { dataTravelBlogsHeader } from "@/app/blogs/data";
import { Breadcrum } from "@/components/home/bread-crumb";
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
export default async function Blogs() {
  const HandBookList = await fetchHandBook({
    Take: 7,
    Url: "/cam-nang",
  });
  console.log("🚀🚀🚀 ======== HandBookList========", HandBookList);
  return (
    <div>
      <div className="lg:py-4 py-4 w-full">
        <Image
          width={1200}
          height={800}
          src="/images/blogs.png"
          alt=""
          className="attachment-original size-original w-full"
          sizes="(max-width: 768px) 80vw, (max-width: 1200px) 30vw, 23vw"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl bg-black bg-opacity-40 p-12 flex flex-col items-center justify-center">
          <h1 className="text-center text-4xl">Cẩm nang du lịch</h1>
          <Breadcrum
            className="mt-5"
            colorBreadcrumbPage={"white"}
            colorBreadcrumbLink={"white"}
            items={[
              { href: "/", title: "Home" },
              { title: "Cẩm nang du lịch", isCurrentPage: true },
            ]}
          />
        </div>
      </div>
      <div className="container px-2 mx-auto mt-10 ">
        <span>
          <a
            href="your-url"
            className="text-blue-500 hover:text-red-500 font-bold"
          >
            Cẩm nang du lịch Châu Âu – Úc
          </a>{" "}
          – Tổng hợp bài viết về các thông tin {""}
          <a
            href="your-url"
            className="text-blue-500 hover:text-red-500 font-bold"
          >
            kinh nghiệm du lịch Châu Âu,
          </a>{" "}
          điểm đến, văn hóa, ẩm thực, lễ hội… của các quốc gia Châu Âu được {""}
          <a href="your-url" className="text-black font-bold text-xl">
            EuroTravel
          </a>{" "}
          biên tập cập nhật mới, thường xuyên giúp du khách có được những hành
          trang tốt nhất trước khi đi tham gia {""}
          <a href="your-url" className="text-black font-bold text-xl">
            tour du lịch Châu Âu.
          </a>{" "}
        </span>
        <div className="mt-5">
          <span>
            Tham khảo những{" "}
            <a href="your-url" className="text-black font-bold text-xl">
              cẩm nang đi du lịch Châu Âu
            </a>{" "}
            đang được nhiều khách hàng quan tâm nhất hiện nay.
          </span>
        </div>
        <BlogList
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-10 justify-items-center items-center mx-auto w-full sm:w-3/4"
          classNameTitle="text-center text-xl font-bold"
          classNameCard="w-72 h-30 flex flex-col items-center"
          classNameImage="flex flex-col items-center justify-center"
        />
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
                  console.log("🚀🚀🚀 ======== item========", item);
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
