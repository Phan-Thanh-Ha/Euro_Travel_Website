import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { fetchHandBook } from "@/actions/blogs";
import { Separator } from "../ui/separator";
import BlogCardItemPlaceHot from "./item-place-hot";



const BlogListPlaceHot = async () => {
  const HandBookList = await fetchHandBook({
    Take: 100,
    Url: "/cam-nang",
  });

  /* Kinh nghiệm du lịch */
  const data1 = HandBookList.filter((item: any) => item.CategoriesId.includes("61"));
  return (
    <div className="lg:container  mt-10 px-2 md:px-0">
      <div className="flex flex-col items-center md:gap-5  px-2 md:px-0">
        <h2 className="text-lg md:text-2xl font-bold text-main mt-8  uppercase">
          Địa danh nổi bật
          <Separator className="mt-2 mb-2" />
        </h2>
      </div>
      <div>
        <Carousel
          className="w-full max-w-full "
          opts={{
            align: "center",
            slidesToScroll: "auto",
            loop: true,
          }}
        >
          <CarouselContent>
            {data1?.length > 0 && data1.map((item: any, index: number) => (
              <CarouselItem key={index} className="  rounded-lg  pl-3  md:basis-1/3 basis-[85%] ">
                <BlogCardItemPlaceHot item={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}

export default BlogListPlaceHot;