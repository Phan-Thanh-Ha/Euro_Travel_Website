import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { FetchPlaceHot, fetchHandBook } from "@/actions/blogs";
import { Separator } from "../ui/separator";
import BlogCardItemPlaceHot from "./item-place-hot";

type TravelBlogSiteManagement = {
  slug: string;
};

const LocationlLandmarks = async (items: TravelBlogSiteManagement) => {
  const HandBookList = await FetchPlaceHot({
    Url: "/" + items.slug,
  });
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
            {HandBookList.length > 0 &&
              HandBookList.map((item: any, index: number) => (
                <CarouselItem
                  key={index}
                  className="  rounded-lg  pl-4  md:basis-1/3 basis-[85%] "
                >
                  <BlogCardItemPlaceHot item={item} />
                </CarouselItem>
              ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default LocationlLandmarks;
