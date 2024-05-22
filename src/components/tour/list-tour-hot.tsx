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
  const RenderContentMobile: React.FC<any> = ({ item }) => {
    let size = 2;
    let ilenght = item.length;
    let result = [];
    for (let i = 0; i < ilenght; i += size) {
      result.push(item.slice(i, i + size));
    }

    return result.map((tour: any, index2: any) => {
      return (
        <CarouselItem key={index2} className="rounded-lg basis-[100%]">
          <div className="grid grid-cols-2 gap-2 mx-2 rounded-lg">
            {tour.map((t: any, i: any) => {
              return (
                <div key={i} className="col-span-1 rounded-lg">
                  <TourItem key={i} data={t} />
                </div>
              );
            })}
          </div>
        </CarouselItem>
      );
    });
  };

  return (
    <div>
      <div className="flex flex-col  md:gap-5  px-2 md:px-0">
        <h2 className="text-lg md:text-2xl font-bold text-main mt-8  uppercase">
          {title}
          <Separator className="mt-2 mb-2" />
        </h2>
      </div>
      <Carousel
        className="w-full max-w-full group hidden md:block "
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
                className="  rounded-lg  pl-4  md:basis-1/3 basis-[85%] "
              >
                <TourItem data={item} quantityDate={9} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-main/50 text-white md:hidden  disabled:hidden group-hover:flex" />
        <CarouselNext className="right-4  bg-main/50  text-white  md:hidden  disabled:hidden group-hover:flex" />
      </Carousel>
      <Carousel
        className="w-full max-w-full group md:hidden"
        opts={{
          align: "center",
          slidesToScroll: "auto",
          loop: true,
        }}
      >
        <CarouselContent>
          <>
            <RenderContentMobile item={randomTourHot} />
          </>
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-main/50 text-white md:hidden  disabled:hidden group-hover:flex" />
        <CarouselNext className="right-4  bg-main/50  text-white  md:hidden  disabled:hidden group-hover:flex" />
      </Carousel>
    </div>
  );
}
