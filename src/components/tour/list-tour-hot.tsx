import { fetchListTourHot } from "@/actions/tour";
import { Separator } from "../ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import TourItem from "@/components/tour/tour-item-card";

export default async function ListTourHot({ title = " Tour du lịch nổi bật" }) {
  const DataTourHot = await fetchListTourHot({
    Id: 0,
    CountryId: 0,
  });
  const randomTourHot = DataTourHot.filter(
    (item: any) => item.IsHot === 1
  ).sort(() => Math.random() - 0.5);
  return (
    <div>
      <div className="flex flex-col  md:gap-5  px-2 md:px-0">
        <h2 className="text-lg md:text-2xl font-bold text-main mt-8  uppercase">
          {title}
          <Separator className="mt-2 mb-2" />
        </h2>
      </div>
      <Carousel
        className="w-full max-w-full group "
        opts={{
          align: "center",
          slidesToScroll: "auto",
          loop: true,
        }}
      >
        <CarouselContent>
          {randomTourHot?.map((item: any, index: number) => {
            return (
              <CarouselItem
                key={index}
                className="  rounded-lg  pl-3  md:basis-1/3 basis-[85%] "
              >
                <TourItem data={item} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-main/50 text-white hidden  disabled:hidden md:group-hover:flex" />
        <CarouselNext className="right-4  bg-main/50  text-white  hidden  disabled:hidden md:group-hover:flex" />
      </Carousel>
    </div>
  );
}
