import { fetchPartner } from "@/actions/partner";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Image from "next/image";
import Link from "next/link";

export default async function PartnerSection() {
    const dataPartner = await fetchPartner({
        GroupId: process.env.NEXT_PUBLIC_GROUPID,
    });
    return (
        <div className="flex flex-col gap-12 lg:my-10 my-4">
            <div className="container mx-auto">
                <div className="flex flex-col">
                    <div className="justify-between py-2">
                        <h2 className="text-2xl font-bold text-main text-center">ĐỐI TÁC CỦA EUROTRAVEL
                            <img src="/images/divider.png" alt="Divider" className="h-2 mx-auto my-3" />
                        </h2>
                    </div>
                    <div className="flex justify-between">
                        <Carousel
                            className="w-full max-w-full "
                            // plugins={[
                            //   Autoplay({
                            //     delay: 5000,
                            //   }),
                            // ]}
                            opts={{
                                align: "start",
                                slidesToScroll: "auto",
                            }}
                        >
                            <CarouselContent>
                                {dataPartner.map((item: any, index: number) => {
                                    return (
                                        <CarouselItem
                                            key={index}
                                            className="rounded-lg md:basis-1/4"
                                        >
                                            <Link target="_blank" rel="noopener noreferrer nofollow" href={item.Url} title={item?.BrandName} >
                                                <Image
                                                    src="/images/button-logo-eurotravel.png"
                                                    /* src={process.env.NEXT_PUBLIC_CDN + item?.BrandImage} */
                                                    alt={item?.BrandName}
                                                    width={500}
                                                    height={500}
                                                    style={{ width: "auto", height: "100%" }}
                                                    className="rounded-lg object-cover w-auto h-full"
                                                />
                                            </Link>
                                        </CarouselItem>
                                    );
                                })}
                            </CarouselContent>
                            {/* <CarouselPrevious className="-left-4 hidden md:flex disabled:hidden" />
                            <CarouselNext className="-right-4  hidden md:flex disabled:hidden" /> */}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}