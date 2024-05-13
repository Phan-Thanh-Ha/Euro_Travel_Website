import Image from "next/image";
import envConfig from "../../../config";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const ListImageTour = ({ data }: { data: any[] }) => {
  return (
    <div className="flex justify-between relative rounded-lg overflow-hidden">
      <Carousel
        className="w-full max-w-full group "
        opts={{
          align: "center",
          slidesToScroll: "auto",
          loop: true,
        }}
      >
        <CarouselContent>
          {data?.map((item: any, index: number) => {
            return (
              <CarouselItem
                key={index}
                className="rounded-lg px-3 basis-[85%] flex gap-2 md:basis-2/3 lg:basis-2/3"
              >
                <Card
                  key={index}
                  className="relative aspect-w-1 aspect-h-1 w-full h-[230px] md:w-[460px] md:h-[300px] lg:w-[790px] lg:h-[480px] overflow-hidden"
                >
                  <CardContent className="w-full h-full absolute top-0 left-0">
                    <Image
                      src={`${envConfig.NEXT_PUBLIC_CDN + item.Image}`}
                      alt="image"
                      fill={true}
                      quality={100}
                      className="rounded-lg"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-white text-main hidden  disabled:hidden md:group-hover:flex" />
        <CarouselNext className="right-4  bg-white text-main  hidden  disabled:hidden md:group-hover:flex" />
      </Carousel>
    </div>
  );
};

export default ListImageTour;
