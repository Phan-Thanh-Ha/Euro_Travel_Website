import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import BlogCardItem from "./item-blog";

export default async function BlogsListCarosel({ data }: any) {
  return (
    <div>
      <Carousel
        className="w-full max-w-full group "
        opts={{
          align: "center",
          slidesToScroll: "auto",
          loop: true,
        }}
      >
        <CarouselContent>
          {data?.slice(0, 6)?.map((item: any, index: number) => {

            return (
              <CarouselItem
                key={index}
                className="  rounded-lg  pl-4  md:basis-1/3 basis-[85%] "
              >
                <BlogCardItem item={item} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-main/50 text-white hidden  disabled:hidden md:group-hover:flex" />
        <CarouselNext className="right-4  bg-main/50  text-white  hidden  disabled:hidden md:group-hover:flex" />
      </Carousel>
    </div>
  )
};